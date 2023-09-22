import { Breadcrumbs } from "../index";
import { Box } from "@mui/material";

export function TopBar() {
 const wrapperStyles = {
  position: "relative",
 };
 return (
  <Box sx={wrapperStyles}>
   <Breadcrumbs />
  </Box>
 );
}
