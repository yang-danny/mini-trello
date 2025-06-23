import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import { TaskModal } from './TaskModal';
import type { TaskStatus } from '../model/Task';
import { FixedSizeList as List } from 'react-window';
import { VirtualList } from './VirtualList';

interface Task {
  id: number;
  title: string;
  body: string;
  status: TaskStatus;
}

interface StatusColumnProps {
  title: Task['status'];
  tasks: Task[];
  onAddTask: (task: Omit<Task, 'id' | 'userId'>) => void;
  onTaskDrop: (taskId: number, newStatus: TaskStatus) => void;
  onDeleteTask?: (id: number) => void;
}

export const StatusColumn: React.FC<StatusColumnProps> = ({ title, tasks, onAddTask, onTaskDrop, onDeleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  setIsDragOver(false);
  const taskId = Number(e.dataTransfer.getData('text/plain'));
  if (!isNaN(taskId)) {
    onTaskDrop(taskId, title as TaskStatus);
  }
};

  const handleSubmit = (task: { title: string; body: string }) => {
    onAddTask({ ...task, status: title });
  };
  const handleKeyboardMove = (taskId: number, direction: 'next' | 'prev') => {
    const statusOrder: TaskStatus[] = ['Todo', 'Doing', 'Done'];
    const currentIdx = statusOrder.indexOf(title as TaskStatus);
    const newIdx = direction === 'next'
      ? Math.min(currentIdx + 1, statusOrder.length - 1)
      : Math.max(currentIdx - 1, 0);
    if (newIdx !== currentIdx) {
      onTaskDrop(taskId, statusOrder[newIdx]);
    }   
  };

  return (
     <div
      role="list"
      aria-label={title}
      className={`bg-gray-200 p-4 rounded-lg shadow-md mt-4 transition-shadow duration-200 ${
        isDragOver ? 'shadow-2xl shadow-sky-600' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2 className="text-xl flex justify-between font-semibold mb-4 text-blue-900">
       <span>{title}</span>                
       <span className='text-base text-sky-500 '>Total {tasks.length} task(s)</span>
      </h2>


      <div className="space-y-3">
        {tasks.length > 300 ? (
        <List
        height={600}
        itemCount={tasks.length}
        itemSize={80}
        width="100%"
        >
         {({ index, style }) => (
        <VirtualList
          index={index}
          style={style}
          tasks={tasks}
          onDelete={onDeleteTask}
          onKeyboardMove={handleKeyboardMove}
          />
        )}
        </List>
        ) : (
        tasks.map((task) => (
        <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        body={task.body}
        onDelete={onDeleteTask}
        onKeyboardMove={handleKeyboardMove}
        />
        ))
        )}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        data-testid="addTask"
        >
          + Add Task
        </button>
      </div>
      <TaskModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        columnTitle={title}
      />
    </div>
  );
};


