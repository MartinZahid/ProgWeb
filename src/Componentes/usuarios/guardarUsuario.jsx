function guardarUsuario() {
    return (
        <>
        <label htmlFor="nombre"> nombre </label>
        <input type= "text" name = "nombre" id = "nombre" />

        <label htmlFor="apellido">apellido</label>
        <input type= "text" name = "apellido" id = "apellido" />

<label htmlFor="apellidoMaterno">apellido materno</label>
        <input type= "text" name = "apellidoMaterno" id = "apellidoMaterno" />



        <label htmlFor="usuario">usuario</label>
        <input type="text" name = "usuario" id = "usuario" />

        <label htmlFor="contraseña">contraseña</label>
        <input type= "text" name = "contraseña" id = "contraseña" />
        <button onClick={guardarUsuario}>Guardar</button>

        </>
    )
}

export default guardarUsuario