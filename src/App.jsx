import { useState } from 'react';
import './App.css';
import CargarTabla from './CargarTabla';
import guardarUsuario from './Componentes/usuarios/guardarUsuario';
import UsuarioIndex from './Componentes/usuarios/index';
import ObtencionUsuarios from './ObtencionUsuarios';
function App() {
  const [datos, setDatos] = useState({
    email: '',
    password: ''
  });

  // Lista de usuarios para validar el login
  const Usuarios = [
    ["Usuario1", "Contrasena1"],
    ["Usuario3", "Contrasena3"],
    ["Usuario4", "Contrasena4"],
    ["Usuario5", "Contrasena5"]
  ];

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validación lógica del login
    const usuarioEncontrado = Usuarios.find(
      (u) => u[0] === datos.email && u[1] === datos.password
    );

    if (usuarioEncontrado) {
      alert(`¡Bienvenido de nuevo, ${datos.email}!`);
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="App">
      <section className="login-container">
        <h1>Iniciar Sesión</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Usuario:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="Introduce tu usuario" 
              value={datos.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={datos.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </section>
      <UsuarioIndex /> {/* <--- Aquí se muestra el componente principal de usuarios */}
<ObtencionUsuarios /> {/* <--- Si no agregas esto, no verás la lista */}
      {/* La tabla se muestra abajo, fuera del formulario para evitar conflictos */}
      <hr style={{ margin: '40px 0' }} />
      
      <CargarTabla />
    </div>
  );
}

export default App;