import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//listar
export const listarUsuarios = createAsyncThunk(
    'usuarios/listar', async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://38.22.229.186:2121/USUARIOS/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error al obtener usuarios");
        }
    }
);

//put
export const modificarUsuario = createAsyncThunk(
    'usuarios/modificar', async (data, { rejectWithValue }) => {
        try {
            const response = await axios.put('http://38.22.229.186:2121/USUARIOS/' + data.usuarioId, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error al modificar");
        }
    }
);

//eliminar
export const eliminarUsuario = createAsyncThunk(
    'usuarios/eliminar', async (id, { rejectWithValue }) => {
        try {
            await axios.delete('http://38.22.229.186:2121/USUARIOS/' + id);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error al eliminar");
        }
    }
);