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
      });
  }
});
    export const usuariosReducer = usuariosSlice.reducer;
    export default usuariosReducer