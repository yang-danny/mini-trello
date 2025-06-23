import { Header } from "../components/Header"
import { fetchTask,updateTask } from '../redux/TaskSlice'
import type { AppDispatch, RootState } from '../redux/store';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import type { Task } from "../model/Task";
import { getRandomStatus } from "../utils/utils";
import { StatusColumn } from "../components/StatusColumn";
const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loadTasks = useSelector((state: RootState) => state.task.loadTasks);
    const loading = useSelector((state: RootState) => state.task.loading);
    const error=useSelector((state: RootState) => state.task.error);
    const [baseTasks, setBaseTasks] = useState<Task[]>([])
    const [newTasks, setNewTasks] = useState<Task[]>([])

    // Load tasks when page loads
    useEffect(() => {
        dispatch(fetchTask());
    }, [dispatch]);

    // Process and update tasks based on loadTasks and baseTasks's changes
    useEffect(() => {
      if (loadTasks.length > 0 && baseTasks.length === 0) {
        setBaseTasks(
          loadTasks.slice(0, 20).map((task: Task) => ({
            ...task,
            status: getRandomStatus(),
          }))
        );
      }
    }, [loadTasks, baseTasks.length]);

    // Combine baseTasks and newTasks into one array to display them on the board
    const tasks=[...baseTasks,...newTasks]
    // Send tasks to status column base on status
    const todo = tasks.filter((task) => task.status === 'Todo');
    const doing = tasks.filter((task) => task.status === 'Doing');
    const done = tasks.filter((task) => task.status === 'Done');
    
    const handleAddTask = (newTask: Omit<Task, 'id' | 'userId'>) => {
      // Find the max id in both baseTasks and newTasks
      const allTasks = [...baseTasks, ...newTasks];
      const maxId = allTasks.length > 0 ? Math.max(...allTasks.map(t => t.id)) : 0;
      const nextId = maxId + 1;
      setNewTasks([
        ...newTasks,
        {
          id: nextId,
          userId: 1,
          ...newTask,
        },
      ]);
    };

    const handleDeleteTask = (id: number) => {
      // Find the task in both baseTasks and newTasks remove it from array and update the state
      setBaseTasks(prev => prev.filter(task => task.id !== id));
      setNewTasks(prev => prev.filter(task => task.id !== id));
    };

    const handleTaskDrop = (taskId: number, newStatus: Task['status']) => {
      // Update the task status in both baseTasks and newTasks arrays
      setBaseTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
      setNewTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
      // Find the task in the current arrays (before update)
      const allTasks = [...baseTasks, ...newTasks];
      const originalTask = allTasks.find(task => task.id === taskId);
    
      if (originalTask) {
        // Updated task with the new status
        const updatedTask = { ...originalTask, status: newStatus };
        dispatch(updateTask(updatedTask));
      }
    };


  return (
    <div className="container w-full max-w-[1280px] flex flex-col justify-center bg-cyan-500 m-4 p-2 sm:p-4 rounded-2xl shadow-lg shadow-inner shadow-blue-500/50">
    <Header />
    {/* Load page contents by loading, error or success fetch from API */}
    {loading ? (
      <LoadingPage />
    ):error? (
      <ErrorPage onRetry={()=>dispatch(fetchTask())}/>
    ):
    (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
        <StatusColumn title="Todo" tasks={todo} onAddTask={handleAddTask} onTaskDrop={handleTaskDrop} onDeleteTask={handleDeleteTask}/>
        <StatusColumn title="Doing" tasks={doing} onAddTask={handleAddTask} onTaskDrop={handleTaskDrop} onDeleteTask={handleDeleteTask}/>
        <StatusColumn title="Done" tasks={done} onAddTask={handleAddTask} onTaskDrop={handleTaskDrop} onDeleteTask={handleDeleteTask}/>
      </div>
    )}
  </div>

  )
}

export default Home