import { Box, Grid, Typography } from "@mui/material";
import { Input, Label, SelectList } from "../../ui";
import { ColourCircle, ColoursGrid, StyledAdminContentContainer, StyledGridContainer } from "./AddCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { SetStateAction, useState } from "react";

export const AddCategory = () => {
 const colors = ["#52877A", "#875252", "#528758", "#868752", "#527787", "#875272", "#FF99C8", "#9D82B0", "#7067CF", "#374785", "#011936", "#465362"];
 const handleColorClick = (color: string) => {
  console.log(color);
 };

 const [imageUrl, setImageUrl] = useState("");

 const handleImageUrlChange = (event: { target: { value: SetStateAction<string> } }) => {
  // Update the state with the new image URL
  setImageUrl(event.target.value);
 };

 return (
  <StyledAdminContentContainer>
   <StyledGridContainer container spacing={2}>
    <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
     <Label htmlFor="name">Name:</Label>
     <Input
      variant="standard"
      placeholder="chatbots"
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
    <Grid container spacing={2} justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12}>
     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="name">Image:</Label>
      <Input
       variant="standard"
       placeholder="Enter Image URL"
       value={imageUrl}
       onChange={handleImageUrlChange}
       InputProps={{
        disableUnderline: true,
       }}
       id="img"
      />
      {imageUrl != "" ? (
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         maxWidth: "100%",
         height: "260px",
         margin: "10px auto",
        }}>
        <img
         src={imageUrl}
         alt="Image"
         style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
          maxHeight: "100%",
          display: "block",
          margin: "10px auto",
          borderRadius: "10px",
          border: "2px solid #fff",
         }}
        />
       </div>
      ) : (
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
         Preview
        </Typography>
       </div>
      )}
     </Grid>
     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="colour">Colour:</Label>
      <ColoursGrid>
       {colors.map((color, index) => (
        <ColourCircle key={index} className="color-circle" style={{ backgroundColor: color }} onClick={() => handleColorClick(color)}></ColourCircle>
       ))}
      </ColoursGrid>
     </Grid>
    </Grid>
   </StyledGridContainer>
  </StyledAdminContentContainer>
 );
};
