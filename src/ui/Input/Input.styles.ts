import { InputLabel, TextField, } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontFamily

}));
export const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.info.dark,
  width: "75%",
  height: "36px",
  borderRadius: "10px",
}));