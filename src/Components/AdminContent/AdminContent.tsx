import { Grid } from "@mui/material";
import { Input, Label } from "../../ui";
import { StyledAdminContentContainer } from "./AdminContent.styles";

export const AdminContent = () => {
  return (
    <StyledAdminContentContainer>
      <Grid container spacing={4}>
        <Grid item laptop={6} desktop={6}>
          <Label htmlFor="category">Category:</Label>
          <Input variant="standard" placeholder="category" InputProps={{
            disableUnderline: true
          }} id="category" />
        </Grid>

        <Grid item laptop={6} desktop={6}>
          <Label htmlFor="license">License:</Label>
          <Input variant="standard" placeholder="license" InputProps={{
            disableUnderline: true
          }} id="license" />
        </Grid>

        <Grid item laptop={6} desktop={6}>
          <Label htmlFor="website">Website:</Label>
          <Input variant="standard" placeholder="web url" InputProps={{
            disableUnderline: true
          }} id="website" />
        </Grid>

        <Grid item laptop={6} desktop={6}>
          <Label htmlFor="ytUrl">URL:</Label>
          <Input variant="standard" placeholder="YouTube Url" InputProps={{
            disableUnderline: true
          }} id="ytUrl" />
        </Grid>

        <Grid item laptop={12} desktop={12}>
          <Label htmlFor="description">Description:</Label>
          <Input sx={{ height: "180px", width: "100%" }} variant="standard" placeholder="description" InputProps={{
            disableUnderline: true, minRows: 3, maxRows: 5
          }} id="description" multiline
          />
        </Grid>
        <Grid item laptop={12} desktop={12}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            // frameborder='0'
            allow='autoplay; encrypted-media'
            // allowfullscreen
            title='video'
          />
        </Grid>

      </Grid>
    </StyledAdminContentContainer>

  );
};