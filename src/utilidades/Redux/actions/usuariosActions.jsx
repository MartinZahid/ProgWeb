import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const listarUsuarios = createAsyncThunk(
    'usuarios/listar', async (_, { rejectWithValue }) => {
        const response =await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
);
