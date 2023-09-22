import { Grid, Typography } from "@mui/material";
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
  const videoIdMatch = url.slice(-11);
  return videoIdMatch;
 };

 // Function to update the embedded YouTube video URL
 const updateEmbedUrl = (pastedText:string) => {
  const videoId = getYouTubeVideoId(pastedText);
  if (videoId) {
   setYoutubeEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
  } else {
   setYoutubeEmbedUrl(""); // Clear the iframe source if no valid video ID is found
  }
 };

 // Handle changes in the YouTube URL input field
 const handleYoutubeUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newUrl = event.target.value;
  updateEmbedUrl(newUrl);
 };

const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
 const pastedText = event.clipboardData.getData("text");
 setYoutubeUrl(pastedText); // Set the pasted text as the input value
 updateEmbedUrl(pastedText);
 event.preventDefault(); // Prevent the default paste behavior
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
     <SelectList items={["1234123412341234123412341 2341234123412341 23412341234123412341234 12341234", "456"]} defaultSelected="456"></SelectList>
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
      onPaste={handlePaste}
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
      <div
       style={{
        height: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "10px auto",
        borderRadius: "10px",
        border: "2px solid #fff",
       }}>
       <Typography
        variant="subtitle2"
        style={{
         color: "#666",
        }}>
        <iframe src={youtubeEmbedUrl} allow="autoplay; encrypted-media" title="video" />
       </Typography>
      </div>
     </Grid>
    </Grid>
   </StyledGridContainer>
  </StyledAdminContentContainer>
 );
};
