import { jsx as _jsx } from "react/jsx-runtime";
import { TaskCard } from './TaskCard';
export const VirtualList = ({ index, style, tasks, onDelete, onKeyboardMove, }) => (_jsx("div", { style: style, children: _jsx(TaskCard, { id: tasks[index].id, title: tasks[index].title, body: tasks[index].body, onDelete: onDelete, onKeyboardMove: onKeyboardMove }, tasks[index].id) }));
