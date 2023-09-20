import { Grid } from "@mui/material";
import { Product } from "..";
const productsArr: productType[] = [
 {
  category: "cośTam",
  license: "free",
  website: "www.cośTam.pl",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente possimus nulla, dolores quae error fuga?",
  youTube: "https://www.youtube.com/embed/pxrQEp6hqNQ?si=XamybaGHh-omLRYm",
 },
 {
  category: "kotlet",
  license: "paid",
  website: "www.kotlet.pl",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente possimus nulla, dolores quae error fuga? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente possimus nulla, dolores quae error fuga?",
  youTube: "https://www.youtube.com/embed/7RZuir77srI?si=MP7FNzh-twA02Ptx",
 },
 {
  category: "mleko",
  license: "free",
  website: "www.mleko.pl",
  description: "pije mleko, bo to dla mnie dobre",
  youTube: "https://www.youtube.com/embed/xxvgiQh6qxU?si=bXGeZ1tQ8OZeAy87",
 },
];

type productType = {
 category: string;
 license: string;
 website: string;
 description: string;
 youTube: string;
};

export const ProductList = () => {
 return (
  <Grid container flexDirection={"column"}>
   {productsArr.map((product) => (
    <Product product={product} key={product.category}></Product>
   ))}
  </Grid>
 );
};
