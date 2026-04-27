import { createSlice } from '@reduxjs/toolkit';
import { listarUsuarios, modificarUsuario, eliminarUsuario } from '../actions/usuariosActions';
import { usuariopost } from '../actions/usuarioPost';

const initialState = {
    usuarios: [],
    usuario : {},
    loading: false,
    error: null
};

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Listar Usuarios
      .addCase(listarUsuarios.pending, (state) => {
        state.loading = true;
      })
      .addCase(listarUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload;
      })
      .addCase(listarUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      //Modificar Usuario
      .addCase(modificarUsuario.pending, (state) => {
        state.loading = true;
      })
      .addCase(modificarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.usuarios.findIndex(u => u.usuarioId === action.payload.usuarioId);
        if (index !== -1) {
          state.usuarios[index] = action.payload;
        }
      })
      .addCase(modificarUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      //  Eliminar Usuario
      .addCase(eliminarUsuario.pending, (state) => {
        state.loading = true;
      })
      .addCase(eliminarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        // Filtramos la lista local para remover el usuario eliminado
        state.usuarios = state.usuarios.filter(u => u.usuarioId !== action.payload);
      })
      .addCase(eliminarUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // (POST)
      .addCase(usuariopost.pending, (state) => {
        state.loading = true;
      })
      .addCase(usuariopost.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) state.usuarios.push(action.payload);
      })
      .addCase(usuariopost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const usuariosReducer = usuariosSlice.reducer;