import React, { useState } from "react";
import axios from "axios";
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Button, Typography, Container 
} from "@mui/material";

function CargarTabla() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);

  const handleClick = () => {
    setCargando(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsuarios(response.data); 
        setCargando(false);
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
        setCargando(false);
      });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Registros de la API
      </Typography>

      <Button 
        variant="contained" 
        color="success" // Cambié a verde para que resalte
        onClick={handleClick}
        sx={{ mb: 3 }}
        disabled={cargando}
      >
        {cargando ? "Cargando..." : "Mostrar todos los usuarios"}
      </Button>

      {usuarios.length > 0 && (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: "#2e7d32" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nombre</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Usuario</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Ciudad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default CargarTabla;