import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

const initialState: IUser = {idUsuario: -1, password: '', usuario: ''};

export const currentUserSlice = createSlice({
    name: 'currentUserSlice',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<IUser>) => {
            return action.payload
        },
        reset: () => initialState
    }
})

export const { setUser, reset } = currentUserSlice.actions

export default currentUserSlice.reducer