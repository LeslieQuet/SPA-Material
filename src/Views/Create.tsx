import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import Copyright from "../Components/Copyright";

export default function Create() {
  return (
    <Container>
        <Box sx={{ my: 10 }}>
        <Button variant="contained" disableElevation component={Link} to="/">
            Home
        </Button>
            <Typography variant="h4" component="h1" gutterBottom>
            Crea una categoría
            </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
            <Typography variant="body2" color="textSecondary">
                Ingrese un nombre
            </Typography>
            <TextField id="outlined-basic" label="Descripcion" variant="outlined" />
            <Typography variant="body2" color="textSecondary">
                Ingrese una descripción de la categoría
            </Typography>
            <TextField id="outlined-basic" label="Picture" variant="outlined" />
            <Typography variant="body2" color="textSecondary">
                Arrastre una imagen o inserte una URL
            </Typography>
            <Button variant="contained" disableElevation>
                Crear
            </Button>
            </Box>
      </Box>
      <Copyright/>
    </Container>
  );
}
