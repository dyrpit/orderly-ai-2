import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const CategoryBoxContainer = styled(Box)(() => ({
    background: 'red',
    borderRadius: '20px',
    width: '470px',
    height: '300px',
    margin: '20px',
    [theme.breakpoints.down("tablet")]: {
        width: "100vw",
      },
}))

export const CategoryBoxContent= styled(Box)(() => ({
    padding: '20px',
    color: theme.palette.text.primary,
}))