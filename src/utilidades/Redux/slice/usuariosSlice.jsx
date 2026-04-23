import { createSlice } from '@reduxjs/toolkit';
import { listarUsuarios } from '../actions/usuariosActions';
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
      
      .addCase(eliminarUsuario.pending, (state) => {
        state.loading = true;
      })
      .addCase(eliminarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = state.usuarios.filter(u => u.usuarioId !== action.payload.usuarioId);
      })
      .addCase(eliminarUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      
      })
      .addCase(usuariopost.pending, (state) => {
        state.loading = true;
      })
      .addCase(usuariopost.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios.push(action.payload);
      })
      .addCase(usuariopost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
    export const usuariosReducer = usuariosSlice.reducer;