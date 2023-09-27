import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const BreadcrumbsContainer = styled("div")(({ theme }) => ({
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 padding: "10px",
 width: "fit-content",
 color: theme.palette.text.primary,
 borderRadius: "10px",
 background: theme.palette.background.paper,
 fontFamily: "Montserrat",
 maxHeight: "30px",
 margin: "16px 0",
}));

export const CrumbContainer = styled("div")({});

export const StyledLink = styled(Link)({
 textDecoration: "none",
 color: "#fff",
 transition: "color 0.2s, font-weight 0.2s",

 "&:hover": {
  color: "white",
  fontWeight: "bold",
 },
});
