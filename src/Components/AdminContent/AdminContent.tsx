import { Grid } from "@mui/material";
import { Input, Label } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer, StyledGridItemCentered, StyledName } from "./AdminContent.styles";
import { StyledIconButton, StyledIconButtonContainer } from "../Menu/Menu.styles";

export const AdminContent = () => {
  return (
    <StyledAdminContentContainer>
      <StyledGridContainer container spacing={2}>
        <Grid item laptop={5} tablet={12} mobile={12} >
          <StyledName>ChatGPT</StyledName>
        </Grid>
        <Grid item laptop={5} tablet={12} mobile={12}  >
          <StyledIconButtonContainer>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_check-line.png" />
            </StyledIconButton>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_trash-line.png" />
            </StyledIconButton>
            <StyledIconButton>
              <img src="../../../src/assets/clarity_close-line.png" />
            </StyledIconButton>
          </StyledIconButtonContainer>
        </Grid>
        <Grid item laptop={5} desktop={5} tablet={12} mobile={12}>
          <Label htmlFor="category">Category:</Label>
          <Input variant="standard" placeholder="category" InputProps={{
            disableUnderline: true
          }} id="category" />
        </Grid>

        <Grid item laptop={6} desktop={6} tablet={12} mobile={12}>
          <Label htmlFor="license">License:</Label>
          <Input variant="standard" placeholder="license" InputProps={{
            disableUnderline: true
          }} id="license" />
        </Grid>

        <Grid item laptop={6} desktop={6} tablet={12} mobile={12}>
          <Label htmlFor="website">Website:</Label>
          <Input variant="standard" placeholder="web url" InputProps={{
            disableUnderline: true
          }} id="website" />
        </Grid>

        <Grid item laptop={6} desktop={6} tablet={12} mobile={12} >
          <Label htmlFor="ytUrl">URL:</Label>
          <Input variant="standard" placeholder="YouTube Url" InputProps={{
            disableUnderline: true
          }} id="ytUrl" />
        </Grid>

        <Grid item laptop={12} desktop={12}>
          <Label htmlFor="description">Description:</Label>
          <Input sx={{ height: "120px", width: "calc(100% - 80px)" }} variant="standard" placeholder="description" InputProps={{
            disableUnderline: true, minRows: 3, maxRows: 4
          }} id="description" multiline
          />
        </Grid>
        <StyledGridItemCentered item laptop={6} desktop={6} sx={{ margin: "0 auto" }}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            // frameborder='0'
            allow='autoplay; encrypted-media'
            // allowfullscreen
            title='video'
          />
        </StyledGridItemCentered>
      </StyledGridContainer>
    </StyledAdminContentContainer>

  );
};