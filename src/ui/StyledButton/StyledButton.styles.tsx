import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const StyledButton = styled(Button)(({ theme: theme }) => ({
 width: "200px",
 height: "60px",
 borderRadius: "15px",
 backgroundColor: theme.palette.info.main,
 display: "flex",
 margin: "auto",
 color: fontSizeVar.loginModalDefault,
 "&:hover": {
  backgroundColor: theme.palette.info.dark,
 },
}));
