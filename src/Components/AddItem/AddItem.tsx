import { Grid } from "@mui/material";
import { Input, Label, SelectList, SelectListCheckmarks } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer, StyledVideoContainer, StyledVideoPreview } from "./AddItem.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { OrderAiContext } from "../../Context/ContextProvider";
import { ErrorMessage } from "../../ui/ErrorMessage/ErrorMessage.styles";
import { Link } from "react-router-dom";

const names = ["Darmowa", "Płatna"];
const productExistsMessage = "Product name already exists!";
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

export const AddItem = () => {
 const [youtubeUrl, setyoutubeUrl] = useState("");
 const [validUrl, setValidUrl] = useState(false);
 const { categories, jsonData, gptData, addProduct, findFreeProductId, findCategoryId, getEmbedYTLink } = useContext(OrderAiContext);
 const categoryNames = gptData ? gptData.map((category) => category.name) : jsonData ? jsonData.map((category) => category.name) : categories ? categories.map((category) => category.name) : [];
 const form = useFormik({
  initialValues: {
   name: "",
   category: "",
   license: [] as string[],
   website: "",
   youtubeUrl: "",
   description: "",
  },
  validationSchema: Yup.object({
   name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
   category: Yup.string().required("Required"),
   license: Yup.array().min(1, "Must select at least one option").required("Required"),
   website: Yup.string()
    .matches(/(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Enter correct url!")
    .required("Required"),
   youtubeUrl: Yup.string().matches(youtubeUrlRegex, "Invalid YouTube URL").required("Required"),
   description: Yup.string().required("Required"),
  }),
  onSubmit: (values) => {
   let isProductNameExists;
   if (gptData) {
    isProductNameExists = gptData?.some((category) => category.products.some((product) => product.name === values.name));
   } else if (jsonData) {
    isProductNameExists = jsonData?.some((category) => category.products.some((product) => product.name === values.name));
   } else if (categories) {
    isProductNameExists = categories?.some((category) => category.products.some((product) => product.name === values.name));
   }

   const errorElement = document.getElementById("error-message");
   if (isProductNameExists) {
    console.log("Category name already exists!");
    if (errorElement) {
     errorElement.textContent = productExistsMessage;
    }
   } else {
    console.log("Form submitted!");
    if (errorElement) {
     errorElement.textContent = "";
    }
    const categoryId = findCategoryId(form.values.category);
    console.log(categoryId);
    addProduct(
     {
      id: findFreeProductId(),
      name: values.name,
      website: values.website,
      youtubeUrl: values.youtubeUrl,
      license: values.license.join(","),
      description: values.description,
     },
     categoryId,
    );
   }
  },
 });

 const commonInputsProperties = (key: "name" | "category" | "license" | "youtubeUrl" | "website" | "description") => ({
  id: key,
  onChange: (e: { target: { value: string } }) => {
   if (key === "youtubeUrl") {
    const isValid = youtubeUrlRegex.test(e.target.value);
    setValidUrl(isValid);
    if (isValid) {
     setyoutubeUrl(getEmbedYTLink(e.target.value));
    }
   }
   form.handleChange(e);
  },
  onBlur: form.handleBlur,
  value: form.values[key],
 });

 return (
  <StyledAdminContentContainer>
   <form onSubmit={form.handleSubmit}>
    <StyledGridContainer container spacing={2}>
     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="name">Name:</Label>
      <Input
       variant="standard"
       placeholder="name"
       InputProps={{
        disableUnderline: true,
       }}
       {...commonInputsProperties("name")}
      />{" "}
      <ErrorMessage>{form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}</ErrorMessage>{" "}
      <ErrorMessage>{productExistsMessage ? <div id="error-message"></div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"end"} item desktop={2} laptop={2} tablet={2} mobile={12}>
      <Grid container justifyContent={"space-between"}>
       <StyledIconButton type="submit">
        <img src="../../../src/assets/clarity_check-line.png" />
       </StyledIconButton>
       <Link to="/admin">
        <StyledIconButton>
         <img src="../../../src/assets/clarity_close-line.png" />
        </StyledIconButton>
       </Link>
      </Grid>
     </Grid>

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="category" sx={{ marginRight: "8px" }}>
       Category:{" "}
      </Label>
      <SelectList name="category" items={categoryNames} field={form.getFieldProps("category")} />
      <ErrorMessage>{form.touched.category && form.errors.category ? <div>{form.errors.category}</div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="license" sx={{ marginRight: "8px" }}>
       License:{" "}
      </Label>
      <SelectListCheckmarks name="license" items={names} field={form.getFieldProps("license")} />
      <ErrorMessage>{form.touched.license && form.errors.license ? <div>{form.errors.license}</div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="website">Website:</Label>
      <Input
       variant="standard"
       placeholder="web url"
       InputProps={{
        disableUnderline: true,
       }}
       {...commonInputsProperties("website")}
      />{" "}
      <ErrorMessage>{form.touched.website && form.errors.website ? <div>{form.errors.website}</div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="ytUrl">YouTube URL:</Label>
      <Input
       variant="standard"
       placeholder="Enter YouTube Url"
       InputProps={{
        disableUnderline: true,
       }}
       {...commonInputsProperties("youtubeUrl")}
      />{" "}
      <ErrorMessage>{form.touched.youtubeUrl && form.errors.youtubeUrl ? <div>{form.errors.youtubeUrl}</div> : null}</ErrorMessage>
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
       {...commonInputsProperties("description")}
       multiline
      />{" "}
      <ErrorMessage>{form.touched.description && form.errors.description ? <div>{form.errors.description}</div> : null}</ErrorMessage>
     </Grid>

     <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
      <Grid item laptop={6} desktop={6} tablet={6} mobile={12}>
       <StyledVideoContainer>
        <StyledVideoPreview>
         {validUrl && (
          <iframe
           width="100%"
           height="100%"
           src={youtubeUrl}
           title="YouTube Video"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen></iframe>
         )}
        </StyledVideoPreview>
       </StyledVideoContainer>
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
