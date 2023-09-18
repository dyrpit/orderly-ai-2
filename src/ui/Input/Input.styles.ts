import { InputLabel, TextField, inputClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontFamily

}));
export const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  width: "80%",
  height: "36px",
  borderRadius: "10px",
  [`& .${inputClasses.root}`]: {
    margin: "0 8px",
  }
}));