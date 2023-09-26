import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeGrid = styled(Grid)(({ theme: theme }) => ({
 margin: "0px",

 [theme.breakpoints.down("tablet")]: {
  margin: "0px 10px",
 },
}));
