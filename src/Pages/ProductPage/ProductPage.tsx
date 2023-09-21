import { Box, Grid } from "@mui/material";
import { ProductList } from "../../Components/ProductList/ProductList";

export const ProductPage = () => {
  return (
    <Grid container flexDirection={"column"}>
      <Box sx={{ width: '100%' }}>
        <ProductList />
      </Box>
    </Grid>

  );
};