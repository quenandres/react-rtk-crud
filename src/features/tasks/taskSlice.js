import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "Taks 1 description",
        completed: false
    },
    {        
        id: "2",
        title: "task 2",
        description: "Taks 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: { //Funcionaes
        addTask:(state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
