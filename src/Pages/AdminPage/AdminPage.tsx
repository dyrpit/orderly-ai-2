import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {
  return (
    <Grid container spacing={2} sx={{marginTop: "20px"}}>
      <Grid item laptop={3} tablet={0} mobile={12} sx={{display:{laptop: "block", tablet:"none", mobile:"none"}}}>
        <AdminNavbar />
      </Grid>
      <Grid item laptop={9} tablet={12} mobile={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
