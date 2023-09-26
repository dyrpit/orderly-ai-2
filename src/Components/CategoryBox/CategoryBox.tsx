import { useContext } from "react";
import { BoxesContainer } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { OrderAiContext } from "../../Context/ContextProvider";
import { Box, Grid } from "@mui/material";

export function Category() {
 const { jsonData, categories } = useContext(OrderAiContext);

 const renderedCategoryBoxes = (jsonData ?? categories ?? []).map((category, index) => (
  <Grid desktop={5} mobile={12} sx={{ gap: "20px", justifyContent: "center" }}>
   <Link to={`${category.name}`} key={index} style={{ textDecoration: "none" }}>
    {/* <Grid container flexDirection={"column"} alignItems={"center"} sx={{ backgroundColor: category.color, width: "100%", minHeight: "240px", borderRadius: "20px", margin: "20px 0px 20px 20px" }}>


    </Grid> */}
    <Grid item mobile={12}>
     <Box sx={{ backgroundColor: category.color, minHeight: "240px", borderRadius: "20px" }}>
      <h2>{category.name}</h2>
     </Box>
    </Grid>
   </Link>
  </Grid>
 ));

 return <BoxesContainer>{renderedCategoryBoxes}</BoxesContainer>;
}
