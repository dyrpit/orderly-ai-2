import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const CategoryBoxContainer = styled(Box)(() => ({
    background: 'red',
    borderRadius: '20px',
    width: '450px',
    height: '300px',
    margin: '20px',
}))

export const CategoryBoxContent= styled(Box)(() => ({
    padding: '20px',
    color: theme.palette.text.primary,
}))