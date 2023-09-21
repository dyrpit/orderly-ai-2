import { Grid } from "@mui/material";
import { Product } from "..";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";

export const ProductList = () => {
  const { products } = useContext(OrderAiContext);
  return (
    <Grid container flexDirection={"column"} >
      {products.map((product) => (
        <Product product={product} key={product.website}></Product>
      ))}
    </Grid>
  );
};
