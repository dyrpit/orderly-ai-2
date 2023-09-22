import { Box, Grid, MenuItem } from "@mui/material";
import { Input, Label, SelectList, SelectListCheckmarks } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer } from "./AddItem.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useState } from "react";

const names = ["Free", "Paid"];

export const AddItem = () => {
 const [youtubeUrl, setYoutubeUrl] = useState("");
 const [youtubeEmbedUrl, setYoutubeEmbedUrl] = useState("");

 // Function to extract the video ID from a YouTube URL
 const getYouTubeVideoId = (url: string) => {
  const videoIdMatch = url.match(
   /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|\/videos\/|\/user\/\S+\/|\/v\/|\/e\/|watch\?v=|watch\?v=|embed\/))([\w-]{11})$/,
  );
  return videoIdMatch && videoIdMatch[1];
 };

 // Function to update the embedded YouTube video URL
 const updateEmbedUrl = () => {
  const videoId = getYouTubeVideoId(youtubeUrl);
  if (videoId) {
   setYoutubeEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
  } else {
   setYoutubeEmbedUrl(""); // Clear the iframe source if no valid video ID is found
  }
 };

 // Handle changes in the YouTube URL input field
 const handleYoutubeUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newUrl = event.target.value;
  setYoutubeUrl(newUrl);
  updateEmbedUrl();
 };

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
     <Label htmlFor="category" sx={{ marginRight: "8px" }}>
      Category:{" "}
     </Label>
     <SelectList items={["1234123412341234123412341 2341234123412341 23412341234123412341234 12341234", "456"]} defaultSelected="123"></SelectList>
    </Grid>

    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="category" sx={{ marginRight: "8px" }}>
      License:{" "}
     </Label>
     <SelectListCheckmarks items={names} defaultSelected={""}></SelectListCheckmarks>
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
     <Label htmlFor="ytUrl">YouTube URL:</Label>
     <Input
      variant="standard"
      placeholder="Enter YouTube Url"
      InputProps={{
       disableUnderline: true,
      }}
      id="ytUrl"
      value={youtubeUrl}
      onChange={handleYoutubeUrlChange}
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
      {youtubeEmbedUrl && (
       <Box>
        <iframe src={youtubeEmbedUrl} allow="autoplay; encrypted-media" title="video" />
       </Box>
      )}
     </Grid>
    </Grid>
   </StyledGridContainer>
  </StyledAdminContentContainer>
 );
};
