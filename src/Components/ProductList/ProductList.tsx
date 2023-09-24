import { Grid } from "@mui/material";
import { Product } from "..";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { ProductData } from "../../Context/types";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const { categoryName } = useParams();
  const { categories } = useContext(OrderAiContext);
  const category = categories?.find(({ name }) => name === categoryName);
  const products: ProductData[] = category ? category.products : [];

  return (
    <Grid container flexDirection={"column"} >
      {
        products.map((product) => (
          <Product categoryName={categoryName ?? ''} product={product} key={product.website}></Product>
        ))
      }
    </Grid >
  );
};
