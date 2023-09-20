import { Grid } from "@mui/material";
import { AdminNavbar } from "../../Components/AdminNavbar/AdminNavbar";
import { AdminContent, UsersEdit } from "../../Components";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";

export const AdminPage = () => {

  const { editUsersVisible } = useContext(OrderAiContext);

  return (
    <Grid container spacing={2}>
      <Grid item laptop={3} tablet={4} mobile={12}>
        <AdminNavbar />
      </Grid>
      <Grid item laptop={9} tablet={8} mobile={12}>
        <AdminContent />
        {editUsersVisible && <UsersEdit />}
      </Grid>
    </Grid>
  );
};
