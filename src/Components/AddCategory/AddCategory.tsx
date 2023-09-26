import { Grid } from "@mui/material";
import { Input, Label, ModalErrorMessage } from "../../ui";
import {
 ColorCircle,
 ColorsGrid,
 StyledAdminContentContainer,
 StyledColorsGridImage,
 StyledColorsGridTitle,
 StyledGridContainer,
 StyledImage,
 StyledImageContainer,
 StyledImagePreview,
 StyledPreviewText,
} from "./AddCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { generateRandomPastelColorsArray } from "../../Context/utils";
import { useRef, useEffect, useState } from "react";

export const AddCategory = () => {
 const [colors, setColors] = useState<string[]>(generateRandomPastelColorsArray(48));
 const form = useFormik({
  initialValues: {
   name: "",
   image: "",
   color: colors[0],
  },
  validationSchema: Yup.object({
   name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
   image: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required")
    .matches(/.(jpg|jpeg|png|gif|bmp|webp)$/, "Must be a valid image URL"),
   color: Yup.string().required("Required"),
  }),
  onSubmit: (values) => {
   console.log(values);
  },
 });

 const commonInputsProperties = (key: "name" | "image" | "color") => ({
  id: key,
  onChange: form.handleChange,
  onBlur: form.handleBlur,
  value: form.values[key],
 });

 const handleClearForm = () => {
  form.resetForm();
 };

 const handleColorClick = (color: string) => {
  form.setFieldValue("color", color);
 };

 const reloadColors = () => {
  setColors(generateRandomPastelColorsArray(48));
  form.values.color = "";
 };
 return (
  <StyledAdminContentContainer>
   <form onSubmit={form.handleSubmit}>
    <StyledGridContainer container spacing={2}>
     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="name">Name:</Label>
      <Input
       variant="standard"
       placeholder="chatbots"
       InputProps={{
        disableUnderline: true,
       }}
       {...commonInputsProperties("name")}
      />
      {form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}
     </Grid>

     <Grid container justifyContent={"end"} item desktop={2} laptop={2} tablet={2} mobile={12}>
      <Grid container justifyContent={"space-between"}>
       <StyledIconButton type="submit">
        <img src="../../../src/assets/clarity_check-line.png" />
       </StyledIconButton>
       <StyledIconButton type="button" onClick={handleClearForm}>
        <img src="../../../src/assets/clarity_close-line.png" />
       </StyledIconButton>
      </Grid>
     </Grid>

     <Grid container spacing={2} justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12}>
      {/* <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
       <Label htmlFor="name">Image:</Label>
       <Input
        variant="standard"
        placeholder="Enter Image URL"
        InputProps={{
         disableUnderline: true,
        }}
        {...commonInputsProperties("image")}
       />{" "}
       {form.touched.image && form.errors.image ? <ModalErrorMessage>{form.errors.image}</ModalErrorMessage> : null}
       {form.values.image !== "" ? (
        <StyledImageContainer>
         <StyledImage src={form.values.image} alt="Image" />
        </StyledImageContainer>
       ) : (
        <StyledImagePreview>
         <StyledPreviewText variant="subtitle2">Preview</StyledPreviewText>
        </StyledImagePreview>
       )}
      </Grid> */}
      <Grid container justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12}>
       <StyledColorsGridTitle>
        <Label htmlFor="name" style={{ alignSelf: "flex-start" }}>
         Image:
        </Label>
        <Label
         htmlFor="name"
         style={{
          alignSelf: "flex-end",
          display: "flex",
          alignItems: "center",
         }}>
         {" "}
         <StyledColorsGridImage src="../../../src/assets/clarity_refresh-line.png" onClick={() => reloadColors()} /> Reload colors
        </Label>
       </StyledColorsGridTitle>
       <ColorsGrid>
        {colors.map((color, index) => (
         <ColorCircle key={index} className={`color-circle ${form.values.color === color ? "selected" : ""}`} style={{ backgroundColor: color }} onClick={() => handleColorClick(color)}></ColorCircle>
        ))}
       </ColorsGrid>
       {form.touched.color && form.errors.color ? <div>{form.errors.color}</div> : null}
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
