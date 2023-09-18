import { colorVar } from "../../Theme/variables";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../Theme/ThemeProvider";

export const Container = styled(Box)(() => ({
 backgroundColor: colorVar.mainBackground,
 display: "flex",
 width: "1170px",
 height: "100vh",
 marginLeft: "auto",
 marginRight: "auto",
 [theme.breakpoints.down("tablet")]: {
  maxWidth: "100%",
 },
}));

export const ContainerContent = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}))

