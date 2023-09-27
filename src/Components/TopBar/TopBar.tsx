import { Breadcrumbs } from "../index";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export function TopBar() {
 const location = useLocation();
 const isAdminPath = location.pathname.startsWith("/admin");

 const wrapperStyles = {
  position: "relative",
 };

 return <Box sx={wrapperStyles}>{isAdminPath ? null : <Breadcrumbs />}</Box>;
}
