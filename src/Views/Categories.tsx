import React from 'react';
import { Container, Grid } from '@mui/material';
import { categories } from '../mockApi';
import CategoryCard from '../Components/CategoryCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Copyright from '../Components/Copyright';

interface Category {
  CategoryId: number;
  CategoryName: string;
  Description: string;
  Picture: string;
}

const Categories: React.FC = () => {
  return (
    <Container>
        <Box padding={4}>
            <Button variant="contained" disableElevation component={Link} to="/">
                Home
            </Button>
            <Grid container spacing={6} margin={2}>
                {categories.map((category: Category) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={category.CategoryId}>
                    <CategoryCard
                    id={category.CategoryId}
                    name={category.CategoryName}
                    image={category.Picture}
                    description={category.Description}
                    />
                </Grid>
                ))}
            </Grid>
        </Box>
        <Copyright/>
    </Container>
  );
};

export default Categories;
