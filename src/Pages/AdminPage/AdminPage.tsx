import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ANButton } from "../../Components/AdminNavbar/AdminNavbar.styles";

export const AdminPage = () => {
 const [adminNavbarVisible, setAdminNavbarVisible] = useState(true);

 const toggleAdminNavbar = () => {
  setAdminNavbarVisible(!adminNavbarVisible);
 };

 return (
  <Grid container spacing={2} sx={{ marginTop: "20px" }}>
   <Grid item laptop={3} tablet={3} mobile={3}>
    {" "}
    {adminNavbarVisible ? <AdminNavbar /> : null}
   </Grid>
   <Grid container justifyContent={"end"} item laptop={12} tablet={12} mobile={12} sx={{ display: { laptop: "none", tablet: "block", mobile: "block" }}}>
    {" "}
    {adminNavbarVisible ? (
     <ANButton style={{ marginLeft: "330px" }} onClick={toggleAdminNavbar} variant="contained" color="primary">
      Hide Admin Navbar
     </ANButton>
    ) : (
     <ANButton style={{ marginLeft: "330px" }} onClick={toggleAdminNavbar} variant="contained" color="primary">
      Show Admin Navbar
     </ANButton>
    )}
   </Grid>
   <Grid item laptop={9} tablet={12} mobile={12}>
    <Outlet />
   </Grid>
  </Grid>
 );
};
