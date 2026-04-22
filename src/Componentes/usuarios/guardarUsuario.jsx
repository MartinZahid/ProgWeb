    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { usuariopost } from '../../utilidades/Redux/actions/usuarioPost';

    function GuardarUsuario({ alFinalizar }) {
        const dispatch = useDispatch();
        const [form, setForm] = useState({
            usuarioId: '',
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombreUsuario: '',
            contraseña: '',
            habilitado: ''
        });

        const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        };

        const handleGuardar = () => {
            console.log("Datos del formulario a enviar:", form);
            dispatch(usuariopost(form))
                .unwrap()
                .then(() => {
                    alert("Usuario guardado con éxito");
                    alFinalizar(); 
                })
                .catch((error) => {
                    alert("Error al guardar: " + error);
                });
        };
    return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>

        <label>Usuario ID</label>
        <input type="text" name="usuarioId" onChange={handleChange} />  

        <label>Nombre</label>
        <input type="text" name="nombre" onChange={handleChange} />

        <label>Apellido Paterno</label>
        <input type="text" name="apellidoPaterno" onChange={handleChange} />

        <label>Apellido Materno</label>
        <input type="text" name="apellidoMaterno" onChange={handleChange} />

        <label>Usuario</label>
        <input type="text" name="nombreUsuario" onChange={handleChange} />

        <label>Contraseña</label>
        <input type="password" name="contraseña" onChange={handleChange} />

      <label>Habilitado</label>
    <select name="habilitado" onChange={handleChange}>
      <option value="Habilitado">Habilitado</option>
      <option value="Deshabilitado">Deshabilitado</option>
    </select>

        

        <button onClick={handleGuardar}>Guardar en Servidor</button>
    </div>
    );
    
    }


    export default GuardarUsuario;