import { createTheme } from "@mui/material";
import { colorVar } from "./variables";
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
export const theme = createTheme({
  palette: {
    background: {
      default: colorVar.mainBackground,
      paper: colorVar.accentBG,
    },
    text: {
      primary: colorVar.textColor,
      secondary: colorVar.textColorDark
    },
    info: {
      main: colorVar.smallAccent,
      light: colorVar.smallAccentLight,
      dark: colorVar.inputBackground
    }
  },
  typography: {
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
