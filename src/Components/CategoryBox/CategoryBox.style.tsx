import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const BoxesContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: '100%',
}));

export const CategoryBoxContainer = styled(Box)(() => ({
  borderRadius: '20px',
  width: '470px',
  height: '300px',
  margin: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },

}));

export const CategoryBoxContent = styled(Box)(() => ({
  padding: '20px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '& h1, & h3': {
    textDecoration: 'none',
  },
  '& a': {
    textDecoration: 'none',
  },
}));