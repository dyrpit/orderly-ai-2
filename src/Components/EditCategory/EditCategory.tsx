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
} from "./EditCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { useOrderAi } from "../../Context/useOrderAi";
import { useParams } from "react-router-dom";
import { generateRandomPastelColorsArray } from "../../Context/utils";

export const EditCategory = () => {
 const { categories } = useOrderAi();
 const { id } = useParams<{ id: string }>();
 const [colors, setColors] = useState<string[]>([]);

 useEffect(() => {
  categories.forEach((item) => {
   if (item.id == id) {
    // Set the first local color to the item's color if available, or use the default color
    const firstLocalColor = item.color || generateRandomPastelColorsArray(1)[0];
    setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]); // Adjust the number of colors accordingly
    form.setValues({
     name: item.name || "",
     imageUrl: item.imageUrl || "",
     color: firstLocalColor, // Set the color field to the first local color
    });
   }
  });
 }, [id, categories]);

 const form = useFormik({
  initialValues: {
   name: "",
   imageUrl: "",
   color: colors[0],
  },
  validationSchema: Yup.object({
   name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
   imageUrl: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required")
    .matches(/.(jpg|jpeg|png|gif|bmp|webp)$/, "Must be a valid image URL"),
   color: Yup.string().required("Required"),
  }),
  onSubmit: (values) => {
   console.log("Form submitted!");
   console.log(values);
  },
 });

 const commonInputsProperties = (key: "name" | "imageUrl" | "color") => ({
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
  const firstLocalColor = form.values.color || generateRandomPastelColorsArray(1)[0];
  setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]);
  form.values.color = ''
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
      <Grid container justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12}>
       <StyledColorsGridTitle>
        <Label htmlFor="name" style={{ alignSelf: "flex-start" }}>
         Image:s
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
       </ColorsGrid>{" "}
       {form.touched.color && form.errors.color ? <div>{form.errors.color}</div> : null}
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
