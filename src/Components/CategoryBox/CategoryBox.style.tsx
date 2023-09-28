import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxesContainer = styled(Box)(({ theme: theme }) => ({
 display: "flex",
 flexWrap: "wrap",
 gap: "10%",
 justifyContent: "center",
 marginBottom: "5%",
 minWidth: "486px",
 "& :hover": {
  transform: "scale(1.02)",
  transition: "transform 0.2s ease",
 },
 "& h2": {
  display: "flex",
  color: "white",
  textShadow: "2px 2px 2px black",
  justifyContent: "center",
  fontFamily: "Montserrat",
  textAlign: "center",
 },
}));
