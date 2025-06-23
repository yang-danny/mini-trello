import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCard } from '../components/TaskCard';
describe('TaskCard', () => {
    it('renders the task title', () => {
        render(_jsx(TaskCard, { id: 1, title: "Test Task", body: "Task details" }));
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
    it('does not show the body by default', () => {
        render(_jsx(TaskCard, { id: 1, title: "Test Task", body: "Task details" }));
        expect(screen.queryByText('Task details')).not.toBeInTheDocument();
    });
    it('shows the body when title is clicked', () => {
        render(_jsx(TaskCard, { id: 1, title: "Test Task", body: "Task details" }));
        fireEvent.click(screen.getByText('Test Task'));
        expect(screen.getByText('Task details')).toBeInTheDocument();
    });
    it('shows the body when arrow button is clicked', () => {
        render(_jsx(TaskCard, { id: 1, title: "Test Task", body: "Task details" }));
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText('Task details')).toBeInTheDocument();
    });
});
