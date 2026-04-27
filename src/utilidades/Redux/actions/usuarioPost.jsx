import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const usuariopost = createAsyncThunk(
    'usuarios/post', 
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://38.22.229.186:2121/USUARIOS', data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error de conexión");
        }
    }
);