import React from 'react';
import { TaskCard } from './TaskCard';

interface VirtualList {
  index: number;
  style: React.CSSProperties;
  tasks: {
    id: number;
    title: string;
    body: string;
  }[];
  onDelete?: (id: number) => void;
  onKeyboardMove?: (taskId: number, direction: 'next' | 'prev') => void;
}

export const VirtualList: React.FC<VirtualList> = ({
  index,
  style,
  tasks,
  onDelete,
  onKeyboardMove,
}) => (
  <div style={style}>
    <TaskCard
      key={tasks[index].id}
      id={tasks[index].id}
      title={tasks[index].title}
      body={tasks[index].body}
      onDelete={onDelete}
      onKeyboardMove={onKeyboardMove}
    />
  </div>
);