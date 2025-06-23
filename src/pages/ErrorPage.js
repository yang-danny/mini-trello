import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ErrorPage = ({ onRetry }) => (_jsxs("div", { className: "flex flex-col items-center justify-center h-96", children: [_jsx("h2", { className: "text-xl text-red-700 mb-4", children: "Failed to load tasks..." }), _jsx("button", { className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700", onClick: onRetry, children: "Retry" })] }));
export default ErrorPage;
