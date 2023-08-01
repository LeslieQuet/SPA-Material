import * as React from 'react';
import Home from './Views/Home'
import Categories from './Views/Categories'
import Create from './Views/Create';
import {Route, Routes} from "react-router-dom"
import { AppBar , Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Surix SPA
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/categories">
            Categories
          </Button>
          <Button color="inherit" component={Link} to="/create">
            Create
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}
