import { StyledSwitch } from "./Switch.styles";
import { SwitchProps as MUISwitchProps } from "@mui/material";

type SwitchProps = MUISwitchProps;

export const Switch = (props: SwitchProps) => {
  return <StyledSwitch {...props} />;
};