import { StyledSwitch } from "./Switch.styles";
import { Box, SwitchProps as MUISwitchProps } from "@mui/material";

type SwitchProps = MUISwitchProps;

export const Switch = (props: SwitchProps) => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <StyledSwitch {...props} />
    </Box>
  );

};