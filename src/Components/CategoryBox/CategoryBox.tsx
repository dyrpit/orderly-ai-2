import { useContext } from "react";
import { StyledBoxWrapper, StyledCategoryBox, StyledCategoryName } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { OrderAiContext } from "../../Context/ContextProvider";
import { Grid } from "@mui/material";

export function Category() {
 const { jsonData, categories, gptData } = useContext(OrderAiContext);
 const dataToUse = gptData || jsonData || categories || [];
 const renderedCategoryBoxes = dataToUse.map((category, index) => (
  <Grid item desktop={6} laptop={6} tablet={12} mobile={12} key={category.name}>
   <Link to={`${category.name}`} key={index} style={{ textDecoration: "none", margin: "0", maxWidth: "100%" }}>
    <StyledCategoryBox
     sx={{
      backgroundColor: category.color,
     }}>
     <StyledCategoryName>{category.name}</StyledCategoryName>
    </StyledCategoryBox>
   </Link>
  </Grid>
 ));

 return (
  <StyledBoxWrapper>
   <Grid container flexDirection={"row"} spacing={3}>
    {renderedCategoryBoxes}
   </Grid>
  </StyledBoxWrapper>
 );
}
