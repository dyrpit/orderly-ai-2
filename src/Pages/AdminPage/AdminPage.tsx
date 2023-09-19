import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { AdminContent } from "../../Components";

export const AdminPage = () => {
  return (
    <Grid container spacing={2} >
      <Grid item laptop={3} tablet={4} mobile={12}>
        <AdminNavbar />
      </Grid>
      <Grid item laptop={9} tablet={8} mobile={12}>
        <AdminContent />
      </Grid>
    </Grid>
  );
};
