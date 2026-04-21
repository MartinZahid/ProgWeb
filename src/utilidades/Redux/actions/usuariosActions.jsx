import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const listarUsuarios = createAsyncThunk(
    'usuarios/listar', async (data, { rejectWithValue }) => {
        const response =axios.get('https://jsonplaceholder.typicode.com/users')
         response.data
    }
);
export const modificarUsuario = createAsyncThunk(
    'usuarios/modificar', async (data, { rejectWithValue }) => {
        const response =axios.put('http://38.22.229.186:2121/USUARIOS/'+data.id, data)
         response.data
    }
);