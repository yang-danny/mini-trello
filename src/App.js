import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: '/', element: _jsx(Layout, {}), children: _jsx(Route, { path: '', element: _jsx(Home, {}) }) }) }) }));
}
export default App;
