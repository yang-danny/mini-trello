import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { TaskModal } from './TaskModal';
import { FixedSizeList as List } from 'react-window';
import { VirtualList } from './VirtualList';
export const StatusColumn = ({ title, tasks, onAddTask, onTaskDrop, onDeleteTask }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = () => {
        setIsDragOver(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const taskId = Number(e.dataTransfer.getData('text/plain'));
        if (!isNaN(taskId)) {
            onTaskDrop(taskId, title);
        }
    };
    const handleSubmit = (task) => {
        onAddTask({ ...task, status: title });
    };
    const handleKeyboardMove = (taskId, direction) => {
        const statusOrder = ['Todo', 'Doing', 'Done'];
        const currentIdx = statusOrder.indexOf(title);
        const newIdx = direction === 'next'
            ? Math.min(currentIdx + 1, statusOrder.length - 1)
            : Math.max(currentIdx - 1, 0);
        if (newIdx !== currentIdx) {
            onTaskDrop(taskId, statusOrder[newIdx]);
        }
    };
    return (_jsxs("div", { role: "list", "aria-label": title, className: `bg-gray-200 p-4 rounded-lg shadow-md mt-4 transition-shadow duration-200 ${isDragOver ? 'shadow-2xl shadow-sky-600' : ''}`, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, children: [_jsxs("h2", { className: "text-xl flex justify-between font-semibold mb-4 text-blue-900", children: [_jsx("span", { children: title }), _jsxs("span", { className: 'text-base text-sky-500 ', children: ["Total ", tasks.length, " task(s)"] })] }), _jsx("div", { className: "space-y-3", children: tasks.length > 300 ? (_jsx(List, { height: 600, itemCount: tasks.length, itemSize: 80, width: "100%", children: ({ index, style }) => (_jsx(VirtualList, { index: index, style: style, tasks: tasks, onDelete: onDeleteTask, onKeyboardMove: handleKeyboardMove })) })) : (tasks.map((task) => (_jsx(TaskCard, { id: task.id, title: task.title, body: task.body, onDelete: onDeleteTask, onKeyboardMove: handleKeyboardMove }, task.id)))) }), _jsx("div", { className: "mt-6", children: _jsx("button", { onClick: () => setIsModalOpen(true), className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700", "data-testid": "addTask", children: "+ Add Task" }) }), _jsx(TaskModal, { open: isModalOpen, onClose: () => setIsModalOpen(false), onSubmit: handleSubmit, columnTitle: title })] }));
};
