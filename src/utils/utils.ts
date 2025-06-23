import type { TaskStatus } from "../model/Task";

export const getRandomStatus = (): TaskStatus => {
  const statuses: TaskStatus[] = ['Todo', 'Doing', 'Done'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};