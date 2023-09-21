import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { AddCategory, AddItem, UsersEdit } from "../../Components";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item laptop={3} tablet={4} mobile={12}>
        <AdminNavbar />
      </Grid>
      <Grid item laptop={9} tablet={8} mobile={12}>
        <Outlet/>
      </Grid>
    </Grid>
  );
};
