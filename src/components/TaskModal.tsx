import React, { useState } from 'react';

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: { title: string; body: string }) => void;
  columnTitle: string;
}

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose, onSubmit, columnTitle }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAdd = () => {
    if (!title.trim() || !body.trim()) {
      setError('Title and details are required.');
      return;
    }
    setError(null);
    onSubmit({ title, body });
    setTitle('');
    setBody('');
    };
    
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
        <h3 className="text-lg font-semibold mb-4 text-blue-900">Add Task to {columnTitle}</h3>
           {error && (
            <div className="mb-3 text-red-600 text-sm">{error}</div>
           )}
            <input
            type="text"
            data-testid="title"
            className="w-full border px-3 py-2 mb-3 rounded text-blue-900"
            placeholder="Title"
            value={title}
            onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError(null);
            }}
            />
            <textarea
            data-testid="details"
            className="w-full border px-3 py-2 mb-3 rounded text-blue-900"
            placeholder="Task details"
            value={body}
            onChange={(e) => {
            setBody(e.target.value);
            if (error) setError(null);
            }}
            />
        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 bg-blue-600 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
          data-testid="add"
          className="px-4 py-2 bg-blue-600 rounded"
          onClick={() => {
          handleAdd();
          if (title.trim() && body.trim()) onClose();
          }}
          >
          Add
          </button>
        </div>
      </div>
    </div>
  );
};
