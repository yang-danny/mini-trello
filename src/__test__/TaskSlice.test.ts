import reducer, { fetchTask, updateTask } from '../redux/TaskSlice';
import { type Task } from '../model/Task';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TaskSlice', () => {

  const initialState = {
    loadTasks: [],
    loading: false,
    error: false,
    changeStatus: false,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle fetchTask.pending', () => {
    const state = reducer(initialState, { type: fetchTask.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle fetchTask.fulfilled', () => {
    const tasks: Task[] = [
      { id: 1, userId: 1, title: 'Test', body: 'Body', status: 'Todo' }
    ];
    const state = reducer(initialState, {
      type: fetchTask.fulfilled.type,
      payload: { tasks }
    });
    expect(state.loadTasks).toEqual(tasks);
    expect(state.loading).toBe(false);
  });

  it('should handle fetchTask.rejected', () => {
    const state = reducer(initialState, { type: fetchTask.rejected.type });
    expect(state.error).toBe(true);
    expect(state.loading).toBe(false);
  });

  it('should handle updateTask.pending', () => {
    const state = reducer(initialState, { type: updateTask.pending.type });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle updateTask.fulfilled', () => {
  const tasks: Task[] = [
    { id: 1, userId: 1, title: 'Test', body: 'Body', status: 'Todo' }
  ];
  // Pre-populate state with the task
  const prevState = {
    loadTasks: tasks,
    loading: false,
    error: false,
    changeStatus: false,
  };
  const updatedTask = { ...tasks[0], status: 'Doing' };
  const state = reducer(prevState, {
    type: updateTask.fulfilled.type,
    payload: updatedTask
  });
  expect(state.loadTasks).toEqual([updatedTask]);
  expect(state.loading).toBe(false);
});

  it('should handle updateTask.rejected', () => {
    const state = reducer(initialState, { type: updateTask.rejected.type });
    expect(state.error).toBe(true);
    expect(state.loading).toBe(false);
  });

  it('fetchTask thunk dispatches fulfilled on success', async () => {
    const tasks: Task[] = [
      { id: 1, userId: 1, title: 'Test', body: 'Body', status: 'Todo' }
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: tasks });

    const store = configureStore({
      reducer: { task: reducer },
    });

    await store.dispatch(fetchTask());
    const state = store.getState().task;
    expect(state.loadTasks).toEqual(tasks);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });

it('updateTask thunk dispatches fulfilled on success', async () => {
  const task: Task = { id: 1, userId: 1, title: 'Test', body: 'Body', status: 'Doing' };
  mockedAxios.patch.mockResolvedValueOnce({ data: { task } });

  const preloadedState = {
    task: {
      loadTasks: [task],
      loading: false,
      error: false,
      changeStatus: false,
    }
  };

  const store = configureStore({
    reducer: { task: reducer },
    preloadedState,
  });

  await store.dispatch(updateTask(task));
  const state = store.getState().task;
  expect(state.loadTasks).toEqual([task]);
  expect(state.loading).toBe(false);
});
});