import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";

    export const store= configureStore({
    reducer: {
        // Add your reducers here
        task: taskReducer,

    },
    })
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;