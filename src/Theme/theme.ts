import { PaletteMode, createTheme } from "@mui/material";
import { colorVar } from "./index";

declare module "@mui/material/styles" {
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
      primary: {
         main: "#666",
      },
   },
});

export const getDesignTokens = (mode: PaletteMode) => ({
   typography: {
      fontSize: 16,
      fontFamily: "Montserrat",
      fontWeightBold: 700,
      fontWeightMedium: 600,
      fontWeightRegular: 400,
   },
   breakpoints: {
      values: {
         mobile: 0,
         tablet: 640,
         laptop: 1024,
         desktop: 1170,
      },
   },
   palette: {
      mode,
      ...(mode === "light"
         ? {
            common: {
               black: "#000",
               white: "#fff",
            },
            background: {
               default: "#A2A8D3",
               paper: "#E7EAF6",
            },
            text: {
               primary: "#5F6D79",
               secondary: "#09263E",
            },
            info: {
               main: "#385A8B",
               light: "#385A8B",
               dark: "#113F67",
            },
         }
         : {
            common: {
               black: "#000",
               white: "#fff",
            },
            background: {
               default: colorVar.mainBackground,
               paper: colorVar.accentBG,
            },
            text: {
               primary: colorVar.textColor,
               secondary: colorVar.textColorDark,
            },
            info: {
               main: colorVar.smallAccent,
               light: colorVar.smallAccentLight,
               dark: colorVar.inputBackground,
            },
         }
      ),
   },
});
