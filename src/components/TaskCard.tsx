import React, { useState, useRef } from 'react';

interface TaskCardProps {
  id:number;
  title: string;
  body: string;
  onDelete?: (id: number) => void; 
  onKeyboardMove?:(id: number, direction: 'next' | 'prev') => void; 
}

export const TaskCard: React.FC<TaskCardProps> = ({ id, title, body, onDelete, onKeyboardMove}) => {
  const [showBody, setShowBody] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      onKeyboardMove?.(id, 'next');
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      onKeyboardMove?.(id, 'prev');
      e.preventDefault();
    }
  };
  const handleToggle = (e: React.MouseEvent) => {
  e.stopPropagation();
  setShowBody((prev) => !prev);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (id !== undefined) {
      e.dataTransfer.setData('text/plain', id.toString());
    }
  };

  return (
        <div
        ref={cardRef}
        role="listitem"
        tabIndex={0}
        className=" relative border p-3 rounded-lg bg-white hover:shadow transition cursor-pointer flex flex-col"
        onClick={handleToggle}
        draggable
        onDragStart={handleDragStart}
        onKeyDown={handleKeyDown}
        >
        <div className=" flex items-center justify-between">
          <span className="font-medium text-gray-600 text-lg flex-1">{title}</span>
          <button
          className={`w-10 h-10 m-4 border-none text-blue-300 hover:text-blue-500 bg-white outline-none focus:outline-none text-xl rounded-full text-sm text-center inline-flex items-center
          ${showBody ? 'rotate-90' : ''}
          `}
          onClick={handleToggle}
          tabIndex={-1}
          aria-label={showBody ? "Hide details" : "Show details"}
          type="button"
          style={{
          transition: 'transform 0.2s',
          transform: showBody ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
           >
          ▶
          </button>
            {onDelete && (
            <button
            data-testid="delete"
            className="absolute w-4 h-4 p-1 mx-4 right-[-3px] top-1 border-none bg-white text-blue-300 hover:text-red-500 text-xl font-bold outline-none focus:outline-none z-10"
            onClick={e => {
            e.stopPropagation();
            onDelete(id);
            }}
            aria-label="Delete task"
            type="button"
            >
            x
            </button>
           )}
        </div>
        {showBody && (
        <div className="w-full mt-3 text-sm text-gray-500">{body}</div>
         )}
        </div>
);
}