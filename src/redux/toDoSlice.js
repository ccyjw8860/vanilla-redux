import { createSlice } from '@reduxjs/toolkit';

const getRandomNumber = () => Math.round(Math.random()*10000)

const toDos = createSlice({
    name: 'toDoReducer',
    initialState: [],
    reducers:{
        add: (state, action) => [...state, {text:action.payload, id:getRandomNumber()}],
        del: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

export const {add, del} = toDos.actions;
export default toDos.reducer;
