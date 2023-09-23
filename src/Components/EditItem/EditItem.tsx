import { Box, Grid } from "@mui/material";
import { Input, Label, SelectListCheckmarks } from "../../ui";
import { StyledEditItemContainer, StyledGridContainer } from "./EditItem.styles";
import { StyledIconButton } from "../Menu/Menu.styles";
import "./EditItem.css";
import { useEditItemEffects } from "./EditItem.effect";
import { useParams } from "react-router";
import { useOrderAi } from "../../Context/useOrderAi";
import { CategoryData, ProductData } from "../../Context/types";
import { useEffect, useState } from "react";

const names = ["Darmowa", "Płatna"];

export const EditItem = () => {
 const { categories } = useOrderAi();
 const { form } = useEditItemEffects();
 const { id } = useParams<{ id: string }>();

 const [foundData, setFoundData] = useState<{ product: ProductData | null; category: CategoryData | null }>({
  product: null,
  category: null,
 });
const { product, category } = foundData ?? { product: null, category: null };
const { name, license = "", website, youtubeUrl, description } = product || {};
const categoryName = category?.name ?? "";
 // Use useEffect to fetch and set the found product and category when the component mounts
 useEffect(() => {
  if (!id || !categories) {
   console.log("null dziwko");
   return;
  }

  for (const currentCategory of categories) {
   const currentProduct = currentCategory.products.find((p) => p.id.toString() === id);
   if (currentProduct) {
    setFoundData({ product: currentProduct, category: currentCategory });
    break; // Exit the loop once the product is found
   }
  }
 }, [id, categories]);


 return (
  <StyledEditItemContainer>
   <form onSubmit={form.handleSubmit}>
    <StyledGridContainer container spacing={2}>
     <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="category">Name:</Label>
      <Input
       variant="standard"
       InputProps={{
        disableUnderline: true,
       }}
       placeholder={form.touched.category && form.errors.category ? "please insert category- max 15 characters" : "category"}
       id="name"
       name="name"
       type="text"
       value={name}
       onChange={form.handleChange}
      />
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
       value={categoryName}
       onChange={form.handleChange}
      />
     </Grid>

     <Grid container justifyContent={"center"} item desktop={6} laptop={6} tablet={6} mobile={12}>
      <Label htmlFor="license">License:</Label>
      <SelectListCheckmarks items={names} defaultSelected={license}></SelectListCheckmarks>
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
       value={website}
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
       value={youtubeUrl}
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
       value={description}
       onChange={form.handleChange}
      />
     </Grid>

     <Grid container justifyContent={"center"} item laptop={12} desktop={12} tablet={12} mobile={12} display={"flex"}>
      <Grid item laptop={6} desktop={6} tablet={6} mobile={12}>
       <Box>
        <iframe src="https://www.youtube.com/embed/E7wJTI-1dvQ" allow="autoplay; encrypted-media" title="video" />
       </Box>
      </Grid>
     </Grid>
    </StyledGridContainer>
   </form>
  </StyledEditItemContainer>
 );
};
