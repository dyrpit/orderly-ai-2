import { Grid } from "@mui/material";
import { ProductList } from "../../Components/ProductList/ProductList";

export const ProductPage = () => {
  return (
    <Grid container flexDirection={"column"} spacing={2} >
      <Grid item>
        <ProductList />
      </Grid>
    </Grid>

  );
};