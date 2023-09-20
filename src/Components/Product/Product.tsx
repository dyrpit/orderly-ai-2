import { Box, Grid } from "@mui/material";
import { StyledDescriptionBox, StyledName, StyledProductContainer, StyledText, StyledTextBox, StyledTitle } from "./Product.styles";
import "./Product.css";

type productType = {
  category: string,
  license: string,
  website: string,
  description: string;
  youTube: string;
};

type ProductProps = {
  product: productType;

};

export const Product = ({ product }: ProductProps) => {
  const { category, description, license, website, youTube } = product;

  return (
    <StyledProductContainer>
      <Grid container spacing={0} margin={0}>
        {/* Column1 */}
        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"} desktop={6} laptop={6}>
          <Grid item>
            <StyledName>ChatGPT</StyledName>
          </Grid>
          <Grid sx={{ width: "inherit" }} item desktop={8} mobile={8} >
            <Box sx={{ width: "inherit", height: "100%" }}>
              <iframe src={youTube} title="video" />
            </Box>
          </Grid>
        </Grid>
        {/* Column2 */}
        <Grid container flexDirection={"column"} desktop={6} laptop={6}>
          <Grid container justifyContent={"space-between"} gap={{ mobile: 0, tablet: 0, laptop: 1, desktop: 2 }}>
            <StyledTextBox>
              <StyledTitle>Category:</StyledTitle>
              <StyledText>{category}</StyledText>
            </StyledTextBox>
            <StyledTextBox>
              <StyledTitle>License:</StyledTitle>
              <StyledText>{license}</StyledText>
            </StyledTextBox>
            <StyledTextBox>
              <StyledTitle>Website:</StyledTitle>
              <StyledText>{website}</StyledText>
            </StyledTextBox>
            <StyledDescriptionBox>
              <StyledTitle>Description:</StyledTitle>
              <StyledText>{description}</StyledText>
            </StyledDescriptionBox>
          </Grid>
        </Grid>
      </Grid>
    </StyledProductContainer>
  );
};
