import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const listarUsuarios = createAsyncThunk(
    'usuarios/listar', async (data, { rejectWithValue }) => {
        const response =axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
);
