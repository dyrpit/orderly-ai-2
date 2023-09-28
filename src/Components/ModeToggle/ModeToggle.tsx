import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useThemeContext } from "../../Theme";
import { StyledIconButton } from "./ModeToggle.styles";

export const ModeToggle = () => {
 const { mode, toggleColorMode } = useThemeContext();

 return <StyledIconButton onClick={toggleColorMode}>{mode === "dark" ? <LightModeIcon /> : <NightlightIcon />}</StyledIconButton>;
};
