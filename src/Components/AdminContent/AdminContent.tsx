import { Box, Grid } from "@mui/material";
import { Input, Label } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer, StyledName } from "./AdminContent.styles";
import { StyledIconButton, } from "../Menu/Menu.styles";
import "./AdminContent.css";

export const AdminContent = () => {
  return (
    <StyledAdminContentContainer>
      <StyledGridContainer container spacing={2}>
        <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12} >
          <StyledName>ChatGPT</StyledName>
        </Grid>
        <Grid container justifyContent={"end"} item desktop={6} laptop={6} tablet={6} mobile={12}  >
          <Grid container justifyContent={'space-between'}>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_check-line.png" />
            </StyledIconButton>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_trash-line.png" />
            </StyledIconButton>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_close-line.png" />
            </StyledIconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
          <Label htmlFor="category">Category:</Label>
          <Input variant="standard" placeholder="category" InputProps={{
            disableUnderline: true
          }} id="category" />
        </Grid>

        <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
          <Label htmlFor="license">License:</Label>
          <Input variant="standard" placeholder="license" InputProps={{
            disableUnderline: true
          }} id="license" />
        </Grid>
        <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
          <Label htmlFor="website">Website:</Label>
          <Input variant="standard" placeholder="web url" InputProps={{
            disableUnderline: true
          }} id="website" />
        </Grid>
        <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12} >
          <Label htmlFor="ytUrl">URL:</Label>
          <Input variant="standard" placeholder="YouTube Url" InputProps={{
            disableUnderline: true
          }} id="ytUrl" />
        </Grid>

        <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12}>
          <Label htmlFor="description">Description:</Label>
          <Input sx={{ height: "120px" }} variant="standard" placeholder="description" InputProps={{
            disableUnderline: true, minRows: 3, maxRows: 4
          }} id="description" multiline
          />
        </Grid>
        <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
          <Grid item laptop={6} desktop={6} tablet={6} mobile={12}  >
            <Box>
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                allow='autoplay; encrypted-media'
                title='video'
              />
            </Box>
          </Grid>
        </Grid>
      </StyledGridContainer>
    </StyledAdminContentContainer >
  );
};