import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Task } from '../types';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data as Task[];
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'completed'>>) => {
      const newTask = {
        ...action.payload,
        id: state.length + 1,
        completed: false,
      };
      state.unshift(newTask);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      return action.payload;
    });
  }
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
