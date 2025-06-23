import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from "../assets/Trello-logo.png";
export const Header = () => {
    return (_jsxs("div", { className: "flex justify-between items-center gap-10 border-b-4 border-indigo-500 ", children: [_jsxs("div", { className: "hidden sm:flex items-center justify-between gap-12", children: [_jsx("h1", { className: "text-2xl text-blue-950 font-bold", children: "Welcome to Mini Trello" }), _jsx("p", { className: "text-xl text-blue-700", children: "Create, manage, and collaborate on your Trello boards" })] }), _jsx("div", { className: "flex flex-1 justify-center sm:justify-end", children: _jsx("img", { src: logo, alt: "Trello Logo", className: "w-32 sm:w-40 h-fit" }) })] }));
};
