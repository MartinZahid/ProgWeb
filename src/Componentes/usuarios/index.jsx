import React, { useState } from 'react';
import GuardarUsuario from './guardarUsuario'; // Importamos el componente corregido
import ObtencionUsuarios from '../../ObtencionUsuarios';

function UsuarioIndex() {
    const [verFormulario, setVerFormulario] = useState(false);

    return (
        <div style={{ padding: '20px' }}>
            {verFormulario ? (
                <>
                    <h1>Registrar Nuevo Usuario</h1>
       
                    <GuardarUsuario alFinalizar={() => setVerFormulario(false)} />
                    <br />
                    <button onClick={() => setVerFormulario(false)}>Cancelar y Volver</button>
                </>
            ) : (
                <>
                    <h1>Gestión de Usuarios</h1>
                    <button onClick={() => setVerFormulario(true)}>
                        Crear Nuevo Usuario (POST)
                    </button>
                    <hr />
                    <ObtencionUsuarios /> 
                </>
            )}
        </div>
    );
}
export default UsuarioIndex;