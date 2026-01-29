import { createSlice } from '@reduxjs/toolkit';
import InitialData from './initialData.js';

export const userSlice = createSlice({
    name: 'data',
    initialState: [...InitialData],
    reducers: {
        addUserData(state, action) {
            state.push(action.payload);
        },
        deleteUserData(state, action) {
            const newState = state.filter(
                (item) => item.unid !== action.payload.unid
            );
            return newState;
        }
    },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
