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
        const response =axios.put('http://38.22.229.186:2121/USUARIOS/'+data.usuarioiD, data)
         response.data
    }
);
    export const eliminarUsuario = createAsyncThunk(
        'usuarios/eliminar', async (id, { rejectWithValue }) => {
            const response =axios.delete('http://38.22.229.186:2121/USUARIOS/'+usuarioiD)
             response.data
        }
    );