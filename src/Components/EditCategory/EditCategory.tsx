import { Grid } from "@mui/material";
import { Input, Label, ErrorMessage } from "../../ui";
import { ColorCircle, ColorsGrid, StyledAdminContentContainer, StyledColorsGridImage, StyledColorsGridTitle, StyledGridContainer } from "./EditCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { generateRandomPastelColorsArray } from "../../Context/utils";
import { OrderAiContext } from "../../Context/ContextProvider";
import { User, UserRole } from "../../Context/types";
import useDecrypt from "../../Hooks/useDecrypt";

const categoryExistsMessage = "Category name already exists!";

export const EditCategory = () => {
 const { categories, jsonData, gptData, editCategory, deleteCategory } = useContext(OrderAiContext);
 const { id } = useParams<{ id: string }>();
 const [colors, setColors] = useState<string[]>([]);
 const { parseJwtToken } = useDecrypt();
 const user: User | undefined = parseJwtToken();

 useEffect(() => {
  if (gptData) {
   gptData.forEach((item) => {
    if (item.id == Number(id)) {
     const firstLocalColor = item.color || generateRandomPastelColorsArray(1)[0];
     setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]);
     form.setValues({
      name: item.name || "",
      imageUrl: item.imageUrl || "",
      color: firstLocalColor,
     });
    }
   });
  } else if (jsonData) {
   jsonData.forEach((item) => {
    if (item.id == Number(id)) {
     const firstLocalColor = item.color || generateRandomPastelColorsArray(1)[0];
     setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]);
     form.setValues({
      name: item.name || "",
      imageUrl: item.imageUrl || "",
      color: firstLocalColor,
     });
    }
   });
  } else if (categories) {
   categories.forEach((item) => {
    if (item.id == Number(id)) {
     const firstLocalColor = item.color || generateRandomPastelColorsArray(1)[0];
     setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]);
     form.setValues({
      name: item.name || "",
      imageUrl: item.imageUrl || "",
      color: firstLocalColor,
     });
    }
   });
  }
 }, [id, categories, jsonData]);

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
   let isCategoryNameExists;
   if (gptData) {
    isCategoryNameExists = gptData?.some((category) => category.name === values.name);
   } else if (jsonData) {
    isCategoryNameExists = jsonData?.some((category) => category.name === values.name);
   } else {
    isCategoryNameExists = categories?.some((category) => category.name === values.name);
   }

   const errorElement = document.getElementById("error-message");
   if (isCategoryNameExists) {
    console.log("Category name already exists!");
    if (errorElement) {
     errorElement.textContent = categoryExistsMessage;
    }
   } else {
    console.log("Form submitted!");
    if (errorElement) {
     errorElement.textContent = "";
    }
    let localId = 0;
    if (id !== undefined) {
     localId = parseInt(id, 10);
     editCategory({
      name: values.name,
      imageUrl: values.imageUrl,
      color: values.color,
      id: localId,
      products: [],
     });
    } else {
     console.error("Couldn't remove category");
    }
   }
  },
 });

 const commonInputsProperties = (key: "name" | "imageUrl" | "color") => ({
  id: key,
  onChange: form.handleChange,
  onBlur: form.handleBlur,
  value: form.values[key],
 });

 const handleRemoveCategory = () => {
  if (id !== undefined) {
   const shouldDelete = window.confirm("Are you sure you want to delete this category?");
   if (shouldDelete) {
    deleteCategory(parseInt(id, 10));
   }
  } else {
   console.error("Couldn't remove category");
  }
 };

 const handleColorClick = (color: string) => {
  form.setFieldValue("color", color);
 };

 const reloadColors = () => {
  const firstLocalColor = form.values.color || generateRandomPastelColorsArray(1)[0];
  setColors([firstLocalColor, ...generateRandomPastelColorsArray(47)]);
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
      <ErrorMessage>{form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"end"} item desktop={2} laptop={2} tablet={2} mobile={12}>
      <Grid container justifyContent={"space-between"}>
       <StyledIconButton type="submit">
        <img src="../../../src/assets/clarity_check-line.png" />
       </StyledIconButton>
       {user && user.role === UserRole.admin ? (
        <StyledIconButton onClick={handleRemoveCategory}>
         <img src="../../../src/assets/clarity_trash-line.png" />
        </StyledIconButton>
       ) : null}
       <Link to="/admin">
        <StyledIconButton>
         <img src="../../../src/assets/clarity_close-line.png" />
        </StyledIconButton>
       </Link>
      </Grid>
     </Grid>

     <Grid container spacing={2} justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12}>
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
       </ColorsGrid>{" "}
       <ErrorMessage>{form.touched.color && form.errors.color ? <div>{form.errors.color}</div> : null}</ErrorMessage>
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
