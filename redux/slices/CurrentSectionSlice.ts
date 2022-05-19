import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = "";

export const currentSectionSlice = createSlice({
    name: 'currentSectionSlice',
    initialState,
    reducers: {
        setSection: (_, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export const { setSection } = currentSectionSlice.actions

export default currentSectionSlice.reducer