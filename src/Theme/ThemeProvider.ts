import { createTheme } from "@mui/material/styles";
import { colorVar } from "./variables";

export const theme = createTheme({
	palette: {
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
	},
	typography: {
		fontSize: 16,
		fontWeightBold: 700,
		fontWeightMedium: 600,
		fontWeightRegular: 400,
	},
});
