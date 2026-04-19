import { usuariosReducer } from "./slice/usuariosSlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore ({
    reducer: {
        usuarios: usuariosReducer   
    }
}); 