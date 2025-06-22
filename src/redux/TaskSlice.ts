import { createAsyncThunk, createSlice, type PayloadAction, } from "@reduxjs/toolkit";

import axios from "axios";
import type { FetchTaskPayload, Task } from "../model/Task";
interface TaskSliceState {
    loadTasks: Task[];
    loading: boolean;
    error:boolean;
    changeStatus: boolean;
}
const initialState: TaskSliceState = {
    loadTasks: [],
    loading: false,
    error: false,
    changeStatus: false

};
export const fetchTask= createAsyncThunk(
    'task/fetch',
    async (payload:FetchTaskPayload, thunkAPI) =>{
        try {
            const req= await axios.get('https://jsonplaceholder.typicode.com/posts')
            const tasks = req.data
            return {
                tasks,
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        resetChangeStatus: (state) => {
            state = {
                ...state,
                changeStatus: false
            }
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
        
            .addCase(fetchTask.pending, (state, action)=>{
                state={
                    ...state,
                    loading: true,
                    error: false,
                }
                return state;
            })
            
            .addCase(fetchTask.fulfilled,(state,action)=>{
                state={
                    ...state,
                   [action.payload.tasks]:action.payload.tasks,
                   loading:false
                }
                return state
            })
            
            .addCase(fetchTask.rejected, (state, action)=>{
                state={
                    ...state,
                    error: true,
                    loading: false,
                }
                return state
            })
           
    }
});

export const { resetChangeStatus } = TaskSlice.actions;
export default TaskSlice.reducer;