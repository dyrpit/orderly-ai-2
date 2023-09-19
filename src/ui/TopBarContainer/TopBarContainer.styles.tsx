import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopBarContainer = styled(Box)(({ theme }) => ({
 width: "1170px",
 height: "150px",
 [theme.breakpoints.down("desktop")]: {
  width: "100%",
 },
}));
