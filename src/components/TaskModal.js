import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const TaskModal = ({ open, onClose, onSubmit, columnTitle }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
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
    if (!open)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white p-6 rounded shadow-md w-[90%] max-w-md", children: [_jsxs("h3", { className: "text-lg font-semibold mb-4 text-blue-900", children: ["Add Task to ", columnTitle] }), error && (_jsx("div", { className: "mb-3 text-red-600 text-sm", children: error })), _jsx("input", { type: "text", "data-testid": "title", className: "w-full border px-3 py-2 mb-3 rounded text-blue-900", placeholder: "Title", value: title, onChange: (e) => {
                        setTitle(e.target.value);
                        if (error)
                            setError(null);
                    } }), _jsx("textarea", { "data-testid": "details", className: "w-full border px-3 py-2 mb-3 rounded text-blue-900", placeholder: "Task details", value: body, onChange: (e) => {
                        setBody(e.target.value);
                        if (error)
                            setError(null);
                    } }), _jsxs("div", { className: "flex justify-end gap-3", children: [_jsx("button", { className: "px-4 py-2 bg-blue-600 rounded", onClick: onClose, children: "Cancel" }), _jsx("button", { "data-testid": "add", className: "px-4 py-2 bg-blue-600 rounded", onClick: () => {
                                handleAdd();
                                if (title.trim() && body.trim())
                                    onClose();
                            }, children: "Add" })] })] }) }));
};
