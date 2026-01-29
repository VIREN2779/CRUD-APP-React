import { createSlice } from '@reduxjs/toolkit';
import InitialData from './initialData.js';

export const userSlice = createSlice({
    name: 'data',
    initialState: [...InitialData],
    reducers: {
        addUserData(state, action) {
            state.push(action.payload);
        }
   
    },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
