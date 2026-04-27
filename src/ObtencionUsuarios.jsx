import { useEffect, useState } from "react";
import { listarUsuarios, eliminarUsuario, modificarUsuario } from "./utilidades/Redux/actions/usuariosActions";  
import { useDispatch, useSelector } from "react-redux";

function ObtencionUsuarios() {
  const dispatch = useDispatch();
  const { usuarios, loading, error } = useSelector((state) => state.usuarios);
  
  //Ediciones de control en las filas
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEdit, setNombreEdit] = useState("");
const [apellidoPaternoEdit, setApellidoPaternoEdit] = useState("");
const [apellidoMaternoEdit, setApellidoMaternoEdit] = useState("");
const [nombreUsuarioEdit, setNombreUsuarioEdit] = useState("");



  useEffect(() => {
    dispatch(listarUsuarios());
  }, [dispatch]);

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      dispatch(eliminarUsuario(id))
        .unwrap()
        .then(() => alert("Usuario eliminado con éxito"))
        .catch((err) => alert("Error: " + err));
    }
  };

  const handleActivarEdicion = (user) => {
    setEditandoId(user.usuarioId || user.id);
    setNombreEdit(user.name || user.nombre || "");
    setApellidoPaternoEdit(user.apellidoPaterno || "");
    setApellidoMaternoEdit(user.apellidoMaterno || "");
    setNombreUsuarioEdit(user.username || user.nombreUsuario || "");

  };

  const handleGuardarEdicion = (user) => {
    const datosModificados = {
      ...user,
      usuarioId: user.usuarioId || user.id,
      nombre: nombreEdit,
      name: nombreEdit, 
      apellidoPaterno: apellidoPaternoEdit,
      apellidoMaterno: apellidoMaternoEdit,
      nombreUsuario: nombreUsuarioEdit,
      username: nombreUsuarioEdit 
    };
    
    dispatch(modificarUsuario(datosModificados))
      .unwrap()
      .then(() => {
        setEditandoId(null);
        alert("Usuario modificado correctamente");
      })
      .catch((err) => alert("Error al modificar: " + err));
  };

  const handleCancelarEdicion = () => {
    setEditandoId(null);
    setNombreEdit("");
    setApellidoPaternoEdit("");
    setApellidoMaternoEdit("");
    setNombreUsuarioEdit("");
  };

  if (loading && usuarios.length === 0) return <div style={{ padding: '20px' }}>Cargando usuarios...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--text-h)', margin: 0 }}>Gestión de Usuarios</h2>
        <button 
          onClick={() => dispatch(listarUsuarios())} 
          className="btn-login" 
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Actualizar Lista
        </button>
      </div>

      {error && <p style={{ color: '#d32f2f', backgroundColor: '#ffebee', padding: '10px', borderRadius: '8px' }}>Error: {error}</p>}
      
      <div className="usuarios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {usuarios.length > 0 ? (
          usuarios.map(user => {
            const currentId = user.usuarioId || user.id;
            const isEditing = editandoId === currentId;

            return (
              <div key={currentId} className="usuario-card" style={{ 
                border: '1px solid var(--border)', 
                borderRadius: '16px', 
                padding: '24px', 
                textAlign: 'left', 
                backgroundColor: 'var(--social-bg)', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                transition: 'transform 0.2s ease'
              }}>
                {isEditing ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--text-p)' }}>Editando Usuario</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-p)' }}>Nombre:</label>
                      <input 
                        type="text" 
                        value={nombreEdit} 
                        onChange={(e) => setNombreEdit(e.target.value)} 
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-p)' }}>Nombre de Usuario:</label>
                      <input 
                        type="text" 
                        value={nombreUsuarioEdit} 
                        onChange={(e) => setNombreUsuarioEdit(e.target.value)} 
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px' }}
                      />
                    </div>
                    
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-p)' }}>Apellido Paterno:</label>
                      <input 
                        type="text" 
                        value={apellidoPaternoEdit} 
                        onChange={(e) => setApellidoPaternoEdit(e.target.value)} 
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px' }}
                      />
                    </div>
                      
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-p)' }}>Apellido Materno:</label>
                      <input 
                        type="text" 
                        value={apellidoMaternoEdit} 
                        onChange={(e) => setApellidoMaternoEdit(e.target.value)} 
                        style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button 
                        onClick={() => handleGuardarEdicion(user)} 
                        style={{ flex: 1, backgroundColor: '#10b981', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Guardar
                      </button>
                      <button 
                        onClick={handleCancelarEdicion} 
                        style={{ flex: 1, backgroundColor: '#64748b', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{ margin: '0 0 4px 0', color: 'var(--text-h)', fontSize: '18px' }}>{user.name || user.nombre}</h3>
                      <span style={{ fontSize: '10px', backgroundColor: 'var(--border)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-p)' }}>ID: {currentId}</span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-p)', marginBottom: '8px' }}>
                      <strong>Usuario:</strong> {user.username || user.nombreUsuario || 'N/A'}
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--text-p)', marginBottom: '24px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <strong>nombre Usuario:</strong> {user.nombreUsuario || 'N/A'}
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--text-p)', marginBottom: '8px' }}>
                      <strong>Apellido Paterno:</strong> {user.apellidoPaterno || 'N/A'}
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--text-p)', marginBottom: '8px' }}>
                      <strong>Apellido Materno:</strong> {user.apellidoMaterno || 'N/A'}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button 
                        onClick={() => handleActivarEdicion(user)}
                        style={{ 
                          flex: 1, 
                          padding: '10px', 
                          borderRadius: '8px', 
                          border: '1px solid var(--accent)', 
                          background: 'transparent', 
                          color: 'var(--accent)', 
                          cursor: 'pointer', 
                          fontSize: '13px'
                        }}
                      >
                        Modificar
                      </button>
                      <button 
                        onClick={() => handleEliminar(currentId)}
                        style={{ 
                          flex: 1, 
                          padding: '10px', 
                          borderRadius: '8px', 
                          border: '1px solid #ef4444', 
                          background: 'transparent', 
                          color: '#ef4444', 
                          cursor: 'pointer', 
                    
                          fontSize: '13px'
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-p)' }}>
            <p>No se encontraron usuarios registrados.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ObtencionUsuarios;