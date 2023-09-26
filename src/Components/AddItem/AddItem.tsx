import { Grid, Typography } from "@mui/material";
import { Input, Label, SelectList, SelectListCheckmarks } from "../../ui";
import { StyledAdminContentContainer, StyledGridContainer, StyledImageContainer, StyledImagePreview } from "./AddItem.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useOrderAi } from "../../Context/useOrderAi";
import { OrderAiContext } from "../../Context/ContextProvider";

const names = ["Darmowa", "Płatna"];
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

export const AddItem = () => {
 const [youtubeUrl, setyoutubeUrl] = useState("");
 const [validUrl, setValidUrl] = useState(false);
 const { categories } = useOrderAi();
 const categoryNames = categories.map((category) => category.name);

 const { getEmbedYTLink } = useContext(OrderAiContext);

 const form = useFormik({
  initialValues: {
   name: "",
   category: "",
   license: "",
   website: "",
   youtubeUrl: "",
   description: "",
  },
  validationSchema: Yup.object({
   name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
   category: Yup.string().required("Required"),
   license: Yup.array().required("Required"),
   website: Yup.string().required("Required"),
   youtubeUrl: Yup.string().matches(youtubeUrlRegex, "Invalid YouTube URL").required("Required"),
   description: Yup.string().required("Required"),
  }),
  onSubmit: (values) => {
   values.license = Array.isArray(values.license) ? values.license.join(", ") : values.license;
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

 const handleClearForm = () => {
  form.resetForm();
 };

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

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="category" sx={{ marginRight: "8px" }}>
       Category:{" "}
      </Label>
      <SelectList name="category" items={categoryNames} field={form.getFieldProps("category")} />
     </Grid>

     <Grid container justifyContent={"left"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="license" sx={{ marginRight: "8px" }}>
       License:{" "}
      </Label>
      <SelectListCheckmarks name="license" items={names} field={form.getFieldProps("license")} />
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
      {form.touched.website && form.errors.website ? <div>{form.errors.website}</div> : null}
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
      {form.touched.youtubeUrl && form.errors.youtubeUrl ? <div>{form.errors.youtubeUrl}</div> : null}
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
      {form.touched.description && form.errors.description ? <div>{form.errors.description}</div> : null}
     </Grid>

     <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
      <Grid item laptop={6} desktop={6} tablet={6} mobile={12}>
       <StyledImageContainer>
        <StyledImagePreview>
         {validUrl && (
          <Typography variant="subtitle2" style={{ color: "#666" }}>
           <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          </Typography>
         )}
        </StyledImagePreview>
       </StyledImageContainer>
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledAdminContentContainer>
 );
};
