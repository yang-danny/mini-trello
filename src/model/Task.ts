export type Task = {
    id: number;
    userId:number;
    title: string;
    body: string;
    status: 'Todo' | 'Doing' | 'Done';
  }
 export type TaskStatus = "Todo" | "Doing" | "Done";
