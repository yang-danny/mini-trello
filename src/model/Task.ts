export type Task = {
    _id: number;
    userId:number;
    title: string;
    body: string;
    status: 'Todo' | 'Doing' | 'Done';
  }
  export type FetchTaskPayload={
    _id: number;
    userId:number;
    title: string;
    body: string;
    }