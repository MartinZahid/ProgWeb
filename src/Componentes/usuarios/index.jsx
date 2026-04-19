import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usuariopost } from '../../utilidades/Redux/actions/usuarioPost';
function Usuario() {
    const [verFormulario, setVerFormulario] = useState(false);

    return (
        <div style={{ padding: '20px' }}>
            {verFormulario ? (
                <>
                    <h1>Registrar Nuevo Usuario</h1>
                    <FormularioRegistro alFinalizar={() => setVerFormulario(false)} />
                    <br />
                    <button onClick={() => setVerFormulario(false)}>Cancelar y Volver</button>
                </>
            ) : (
                <>
                    <h1>Tabla de Usuarios</h1>
                    <button onClick={() => setVerFormulario(true)}>
                        Crear Nuevo Usuario
                    </button>
                    <hr />
                    <ObtencionUsuarios />
                </>
            )}
        </div>
    );
}