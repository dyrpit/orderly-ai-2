import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {
 return (
  <Grid container spacing={2} sx={{ marginTop: "20px" }}>
   <Grid item laptop={3} tablet={4} tabletsmall={4} mobile={12} sx={{ height: "fit-content" }}>
    <AdminNavbar />
   </Grid>
   <Grid item laptop={9} tablet={8} tabletsmall={8} mobile={12}>
    <Outlet />
   </Grid>
  </Grid>
 );
};
