import GroceriesGrid from '../components/Grid/GroceriesGrid'
import { Grid } from '@mui/material'

const Recipes = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
    <GroceriesGrid />
    </Grid>
  );
};

export default Recipes;
