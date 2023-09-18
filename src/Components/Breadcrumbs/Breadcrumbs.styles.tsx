import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { theme } from "../../Theme/ThemeProvider";


export const BreadcrumbsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  width: "fit-content",
  color: theme.palette.text.primary,
  borderRadius: "10px",
  background: theme.palette.background.paper,
  fontFamily: "Montserrat",
});

export const CrumbContainer = styled("div")({
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.text.primary,
});
