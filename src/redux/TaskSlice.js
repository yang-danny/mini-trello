import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loadTasks: [],
    loading: false,
    error: false,
    changeStatus: false
};
export const fetchTask = createAsyncThunk('task/fetchTask', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const tasks = response.data;
        return { tasks };
    }
    catch (error) {
        throw Error("Load tasks failed with: " + error);
    }
});
export const updateTask = createAsyncThunk('task/update', async (payload, thunkAPI) => {
    try {
        /*
        // const response=await axios.patch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`,payload)
        // return response.data.task
        */
        // Simulate backend update
        console.log(`Update task status with backend: id:${payload.id} title:${payload.title} body:${payload.body} status:${payload.status} `);
        return payload;
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        resetChangeStatus: (state) => {
            state = {
                ...state,
                changeStatus: false
            };
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTask.pending, (state) => {
            state = {
                ...state,
                loading: true,
                error: false,
            };
            return state;
        })
            .addCase(updateTask.pending, (state) => {
            state = {
                ...state,
                loading: true,
                error: false
            };
            return state;
        })
            .addCase(fetchTask.fulfilled, (state, action) => {
            state = {
                ...state,
                loadTasks: action.payload?.tasks || [],
                loading: false
            };
            return state;
        })
            .addCase(updateTask.fulfilled, (state, action) => {
            state = {
                ...state,
                loadTasks: state.loadTasks.map(task => task.id === action.payload.id ? { ...task, ...action.payload } : task),
                loading: false
            };
            return state;
        })
            .addCase(fetchTask.rejected, (state) => {
            state = {
                ...state,
                error: true,
                loading: false,
            };
            return state;
        })
            .addCase(updateTask.rejected, (state) => {
            state = {
                ...state,
                error: true,
                loading: false
            };
            return state;
        });
    }
});
export const { resetChangeStatus } = TaskSlice.actions;
export default TaskSlice.reducer;
