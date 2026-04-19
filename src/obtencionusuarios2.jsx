import axios from "axios";
import { useState } from "react";

function ObtencionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const filtrados = response.data.filter(item => item.name === "Clementine Bauch");



        console.log(filtrados);
        setUsuarios(filtrados);
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
      });
  };

  return (
    <>
        <div>
      <button onClick={handleClick}>Cargar Datos
      </button>
      
        <div>
        {usuarios.map(user => (
          <div key={user.id} >
            {Object.entries(user).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {JSON.stringify(value)}</p>
            ))}
          </div>
        ))}
      </div>
      </div>
  
    </>
  );
}

export default ObtencionUsuarios;
