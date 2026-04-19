import { useEffect } from "react";
import { listarUsuarios } from "./utilidades/Redux/actions/usuariosActions";  
import { useDispatch, useSelector } from "react-redux";

function ObtencionUsuarios() {
  const dispatch = useDispatch();
  
  // Extraemos usuarios, loading y error del estado global
  const { usuarios, loading, error } = useSelector((state) => state.usuarios);

  // Carga automática al iniciar el componente
  useEffect(() => {
    dispatch(listarUsuarios());
  }, [dispatch]);

  // Función para el botón (Carga manual)
  const handleClick = () => {
    dispatch(listarUsuarios());
  };

  if (loading) return <p>Cargando datos del servidor...</p>;
  if (error) return <p>Error al cargar: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick} className="btn-login">
        Refrescar Datos
      </button>
      
      <div className="usuarios-grid">
        {usuarios.length > 0 ? (
          usuarios.map(user => (
            <div key={user.id} className="usuario-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>{user.name}</h3>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Ciudad:</strong> {user.address?.city}</p>
            </div>
          ))
        ) : (
          <p>No hay usuarios disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default ObtencionUsuarios;