import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../resources/api';
import { IUser, IUserLogin } from '../../interfaces/IUser';

const initialState: IUser[] = [];

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (_, action: PayloadAction<IUser[]>) => {
            return action.payload
        },
        addUser: (state, action: PayloadAction<IUser>) => {
            state.push(action.payload)
        }
    }
})

export const getUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
    try {
        const res = await api.get<IUser[]>('usuarios');
        thunkAPI.dispatch(setUsers(res.data))
    } catch (err) {
        return thunkAPI.rejectWithValue('Error')
    }
})

export const deleteUser = createAsyncThunk('users/delete', async (id: number, thunkAPI) => {
    try {
        await api.delete(`usuarios/${id}`);
        thunkAPI.dispatch(getUsers());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})


interface putUsuario {
    datos: IUser, id: number
}

export const editUsuario = createAsyncThunk('usuarios/put', async ({ id, datos }: putUsuario, thunkAPI) => {
    try {
        await api.put(`usuarios/${id}`, datos);
        thunkAPI.dispatch(getUsers());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})

export const addUsuario = createAsyncThunk('usuarios/post', async (datos: IUserLogin, thunkAPI) => {
    try {
        await api.post('usuarios', datos);
        thunkAPI.dispatch(getUsers());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})

export const { setUsers, addUser } = userSlice.actions

export default userSlice.reducer