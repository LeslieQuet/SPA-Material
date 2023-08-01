import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import Copyright from '../Components/Copyright';

export default function Home() {

  return (
    <Container maxWidth="xl">
        <Box sx={{ my: 4 }} height="70vh">
            <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App in TypeScript by Leslie
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
            Mock App desarrollada en prueba técnica para Surix
            </Typography>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ margin: '20px' }}>
                <Button component={Link} to="/categories">
                    Ver categorías en existencia
                </Button>
                <Button component={Link} to="/create">
                    Crear una nueva categoría
                </Button>
            </ButtonGroup>
        </Box>
        <Copyright />
    </Container>
  );
}

