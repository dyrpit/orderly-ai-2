import { Box, Grid } from "@mui/material";
import { Input, Label, SelectList } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer } from "./AddCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";


export const AddCategory = () => {

 return (
  <StyledAdminContentContainer>
   <StyledGridContainer container spacing={2}>
    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="name">Name:</Label>
     <Input
      variant="standard"
      placeholder="name"
      InputProps={{
       disableUnderline: true,
      }}
      id="name"
     />
    </Grid>
    <Grid container justifyContent={"end"} item desktop={2} laptop={2} tablet={2} mobile={12}>
     <Grid container justifyContent={"space-between"}>
      <StyledIconButton>
       <img src="../../../src/assets/clarity_check-line.png" />
      </StyledIconButton>
      <StyledIconButton>
       <img src="../../../src/assets/clarity_close-line.png" />
      </StyledIconButton>
     </Grid>
    </Grid>
    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="category">Category: </Label>
     <SelectList items={["123","456"]} defaultSelected="123">
     </SelectList>
    </Grid>

    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="category">License: </Label>
     
    </Grid>
    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="website">Website:</Label>
     <Input
      variant="standard"
      placeholder="web url"
      InputProps={{
       disableUnderline: true,
      }}
      id="website"
     />
    </Grid>
    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="ytUrl">URL:</Label>
     <Input
      variant="standard"
      placeholder="YouTube Url"
      InputProps={{
       disableUnderline: true,
      }}
      id="ytUrl"
     />
    </Grid>

    <Grid container justifyContent={"left"} item laptop={12} desktop={12} tablet={12} mobile={12}>
     <Label htmlFor="description">Description:</Label>
     <Input
      sx={{ height: "120px" }}
      variant="standard"
      placeholder="description"
      InputProps={{
       disableUnderline: true,
       minRows: 3,
       maxRows: 4,
      }}
      id="description"
      multiline
     />
    </Grid>
    <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
     <Grid item laptop={6} desktop={6} tablet={6} mobile={12}>
      <Box>
       <iframe src="https://www.youtube.com/embed/E7wJTI-1dvQ" allow="autoplay; encrypted-media" title="video" />
      </Box>
     </Grid>
    </Grid>
   </StyledGridContainer>
  </StyledAdminContentContainer>
 );
};
