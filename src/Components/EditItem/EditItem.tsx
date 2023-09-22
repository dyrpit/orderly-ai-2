import { Box, Grid } from "@mui/material";
import { Input, Label } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer, StyledName } from "./EditItem.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import "./EditItem.css";
import { useAdminContentEffects } from "./EditItem.effect";

export const AdminContent = () => {
  const { form } = useAdminContentEffects();

  return (
    <StyledAdminContentContainer>
      <form onSubmit={form.handleSubmit}>
        <StyledGridContainer container spacing={2}>
          <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
            <StyledName>ChatGPT</StyledName>
          </Grid>
          <Grid container justifyContent={"end"} item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Grid container justifyContent={"space-between"}>
              <StyledIconButton type="submit">
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
            <Input
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder={form.touched.category && form.errors.category ? "please insert category- max 15 characters" : "category"}
              id="category"
              name="category"
              type="text"
              value={form.values.category}
              onChange={form.handleChange}
            />
          </Grid>

          <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Label htmlFor="license">License:</Label>
            <Input
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder={form.touched.license && form.errors.license ? "please insert license- max 15 characters" : "license"}
              id="license"
              name="license"
              type="text"
              value={form.values.license}
              onChange={form.handleChange}
            />
          </Grid>

          <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Label htmlFor="website">Website:</Label>
            <Input
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder={form.touched.website && form.errors.website ? "please insert corect url" : "website url"}
              id="website"
              name="website"
              type="url"
              value={form.values.website}
              onChange={form.handleChange}
            />
          </Grid>

          <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
            <Label htmlFor="ytUrl">URL:</Label>
            <Input
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              id="ytUrl"
              name="ytUrl"
              type="url"
              placeholder={form.touched.ytUrl && form.errors.ytUrl ? "please insert corect YouTube url" : "YouTube url"}
              value={form.values.ytUrl}
              onChange={form.handleChange}
            />
          </Grid>

          <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12}>
            <Label htmlFor="description">Description:</Label>
            <Input
              sx={{ height: "120px" }}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                minRows: 3,
                maxRows: 4,
              }}
              multiline
              placeholder={form.touched.description && form.errors.description ? "please insert description (min 10 - max 150 characters)" : "description"}
              id="description"
              name="description"
              type="text"
              value={form.values.description}
              onChange={form.handleChange}
            />
          </Grid>

          <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
            <Grid item laptop={6} desktop={6} tablet={6} mobile={12}>
              <Box>
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  allow="autoplay; encrypted-media"
                  title="video" />
              </Box>
            </Grid>
          </Grid>
        </StyledGridContainer>
      </form>
    </StyledAdminContentContainer>
  );
};
