import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILibro } from '../../interfaces/ILibro';
import api from '../../resources/api';

const initialState: ILibro[] = [];

export const libroSlice = createSlice({
    name: 'libroSlice',
    initialState,
    reducers: {
        setLibros: (_, action: PayloadAction<ILibro[]>) => {
            return action.payload
        }
    }
})

export const getLibros = createAsyncThunk('libros/get', async (_, thunkAPI) => {
    try {
        const res = await api.get<ILibro[]>('libros');
        thunkAPI.dispatch(setLibros(res.data))
    } catch (err) {
        return thunkAPI.rejectWithValue('Error')
    }
})

export const deleteLibro = createAsyncThunk('libros/delete', async (id: string, thunkAPI) => {
    try {
        await api.delete(`libros/${id}`);
        thunkAPI.dispatch(getLibros());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})

export const addLibro = createAsyncThunk('libros/post', async (datos: ILibro, thunkAPI) => {
    try {
        await api.post('libros', datos);
        thunkAPI.dispatch(getLibros());
    } catch (err) {
        return thunkAPI.rejectWithValue('err')
    }
})

export const { setLibros } = libroSlice.actions

export default libroSlice.reducer