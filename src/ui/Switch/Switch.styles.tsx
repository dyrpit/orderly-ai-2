import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSwitch = styled(Switch)({
  width: "200px",
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      transform: "translateX(168px)",
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,

    "&:after": {
      content: "'on'"
    }

  },
});
