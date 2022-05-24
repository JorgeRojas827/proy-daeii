import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

const initialState: IUser = {password: '', usuario: ''};

export const currentUserSlice = createSlice({
    name: 'currentUserSlice',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<IUser>) => {
            return action.payload
        }
    }
})

export const { setUser } = currentUserSlice.actions

export default currentUserSlice.reducer