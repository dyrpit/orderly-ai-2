import { Grid } from "@mui/material";
import { Input, Label } from "../../ui";
import { ColorCircle, ColorsGrid, StyledAdminContentContainer, StyledColorsGridImage, StyledColorsGridTitle, StyledGridContainer } from "./AddCategory.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { generateRandomPastelColorsArray } from "../../Context/utils";
import { useContext, useState } from "react";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage.styles";
import { OrderAiContext } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";

const categoryExistsMessage = "Category name already exists!";

export const AddCategory = () => {
 const { categories, jsonData, gptData, addCategory, findFreeCategoryId } = useContext(OrderAiContext);
 const [colors, setColors] = useState<string[]>(generateRandomPastelColorsArray(48));

 const form = useFormik({
  initialValues: {
   name: "",
   imageUrl: "",
   color: colors[0],
  },
  validationSchema: Yup.object({
   name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
   color: Yup.string().required("Required"),
  }),
  onSubmit: (values) => {
   let isCategoryNameExists = (gptData || jsonData || categories)?.some((category) => category.name === values.name);

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
    addCategory({
     name: values.name,
     imageUrl: values.imageUrl,
     color: values.color,
     id: findFreeCategoryId(),
     products: [],
    });
   }
  },
 });

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
     <Grid container justifyContent={"left"} item desktop={8} laptop={8} tablet={8} mobile={12} order={{ tablet: 1, mobile: 2 }}>
      <Label htmlFor="name">Name:</Label>
      <Input
       variant="standard"
       placeholder="chatbots"
       InputProps={{    
        disableUnderline: true,
       }}
       {...form.getFieldProps("name")}
      />
      <ErrorMessage>{form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}</ErrorMessage>
      <ErrorMessage>{categoryExistsMessage ? <div id="error-message"></div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"end"} item desktop={2} laptop={2} tablet={2} mobile={12} order={{ tablet: 2, mobile: 1 }}>
      <Grid container justifyContent={"space-between"}>
       <StyledIconButton type="submit">
        <img src="../../../src/assets/clarity_check-line.png" />
       </StyledIconButton>
       <StyledIconButton>
        <Link to="/admin">
         <img src="../../../src/assets/clarity_close-line.png" />
        </Link>
       </StyledIconButton>
      </Grid>
     </Grid>

     {/* <Grid container spacing={2} justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12} >
      <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
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
     <Grid container justifyContent={"left"} item desktop={12} laptop={12} tablet={12} mobile={12} order={{ tablet: 2, mobile: 2 }}>
      <StyledColorsGridTitle>
       <Label htmlFor="color" style={{ alignSelf: "flex-start" }}>
        Color:
       </Label>
       <Label
        htmlFor="color"
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
      <ErrorMessage>{form.touched.color && form.errors.color ? <div>{form.errors.color}</div> : null}</ErrorMessage>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
