import { useContext } from "react";
import { BoxesContainer } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { OrderAiContext } from "../../Context/ContextProvider";
import { Box, Grid } from "@mui/material";

export function Category() {
 const { jsonData, categories, gptData } = useContext(OrderAiContext);
 const dataToUse = gptData || jsonData || categories || [];

 const renderedCategoryBoxes = dataToUse.map((category, index) => (
  <Grid desktop={5} mobile={12} key={category.name}>
   <Link to={`${category.name}`} key={index} style={{ textDecoration: "none" }}>
    <Grid>
     <Box sx={{ backgroundColor: category.color, minHeight: "240px", borderRadius: "20px" }}>
      <div>
       <h2>{category.name}</h2>
      </div>
     </Box>
    </Grid>
   </Link>
  </Grid>
 ));

 return <BoxesContainer>{renderedCategoryBoxes}</BoxesContainer>;
}
