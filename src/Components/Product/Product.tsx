import { Box, Grid } from "@mui/material";
import { StyledDescriptionBox, StyledLinkText, StyledName, StyledNameTooltip, StyledProductContainer, StyledText, StyledTextBox, StyledTitle, StyledTooltip } from "./Product.styles";
import { useContext } from "react";
import { ProductData } from "../../Context/types";
import { OrderAiContext } from "../../Context/ContextProvider";
import "./Product.css";
import { Link } from "@mui/material";

type ProductProps = {
 product: ProductData;
 categoryName: string;
};

export const Product = ({ product, categoryName }: ProductProps) => {
 const { getEmbedYTLink } = useContext(OrderAiContext);
 const { description, license, name, website, youtubeUrl } = product;

 return (
  <StyledProductContainer>
   <Grid container spacing={0} margin={0}>
    <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"} desktop={6} laptop={6} tablet={12} mobile={12} sx={{ padding: "16px 0" }}>
     <Grid sx={{ width: "50%" }} item>
      {name.length > 15 ? (
       <StyledNameTooltip title={name}>
        <StyledName>{name}</StyledName>
       </StyledNameTooltip>
      ) : (
       <StyledName>{name}</StyledName>
      )}
     </Grid>
     <Grid item sx={{ width: "inherit" }} desktop={8} laptop={8} mobile={8} tablet={8}>
      <Box sx={{ width: "inherit", height: "100%" }}>
       <iframe src={getEmbedYTLink(youtubeUrl)} title="video" />
      </Box>
     </Grid>
    </Grid>
    <Grid container flexDirection={"column"} desktop={6} laptop={6} mobile={12} tablet={12}>
     <Grid container justifyContent={"space-between"} gap={{ mobile: 0, tablet: 0, laptop: 1, desktop: 2 }} sx={{ paddingBottom: "16px" }}>
      <StyledTextBox>
       <StyledTitle>Category:</StyledTitle>
       <StyledText>{categoryName}</StyledText>
      </StyledTextBox>
      <StyledTextBox>
       <StyledTitle>License:</StyledTitle>
       <StyledText>{license}</StyledText>
      </StyledTextBox>
      <StyledTextBox>
       <StyledTitle>Website:</StyledTitle>
       <Link href={website} underline="none">
        <StyledLinkText>{website}</StyledLinkText>
       </Link>
      </StyledTextBox>
      <StyledDescriptionBox>
       <StyledTitle>Description:</StyledTitle>
       <StyledTooltip title={description} placement="top-start">
        <StyledText>{description}</StyledText>
       </StyledTooltip>
      </StyledDescriptionBox>
     </Grid>
    </Grid>
   </Grid>
  </StyledProductContainer>
 );
};
