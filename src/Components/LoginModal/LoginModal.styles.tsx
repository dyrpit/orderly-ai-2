import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const LoginModalContainer = styled(Box)(({theme: theme}) => ({
    backgroundColor: theme.palette.background.default,
    width: "828px",
    height: "500px",
  "& form": {
    width: "100%",
  },
}))

export const ModalHeader = styled(Typography)(({ theme: theme }) => ({
  width: "278px",
  height: "60px",
  color: theme.palette.text.primary,
  fontSize: fontSizeVar.loginModalHeader,
  padding: "30px 0px 30px 0px",
  textAlign: "center",
  margin: "auto",
  fontWeight: theme.typography.fontWeightBold,
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));

export const ModalSubHeader = styled(Typography)(({ theme: theme }) => ({
  width: "288px",
  height: "20px",
  color: theme.palette.text.secondary,
  textAlign: "center",
  padding: "0px 0px 30px 0px",
  margin: "auto",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));

export const ModalInput = styled(TextField)(({ theme: theme }) => ({
  width: "512px",
  height: "60px",
  borderRadius: "14px",
  background: theme.palette.info.dark,
  display: "flex",
  margin: "auto",
  marginBottom: "30px",
  justifyContent: "center",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
  "& input": {
    width: "472px",
    overflow: "hidden",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
  "& fieldset": {
    border: "none",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    "& input": {
      width: "100%",
    },
  },
}));

export const ModalErrorMessage = styled(Typography)(({ theme: theme }) => ({
  width: "512px",
  height: "30px",
  fontSize: "12px",
  color: "red",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));

export const ModalButton = styled(Button)(({ theme: theme }) => ({
  width: "200px",
  height: "60px",
  borderRadius: "15px",
  backgroundColor: theme.palette.info.main,
  display: "flex",
  margin: "auto",
  color: fontSizeVar.loginModalDefault,
  "&:hover": {
    backgroundColor: theme.palette.info.dark,
  }
}));

export const ModalFooter = styled(Typography)(({ theme: theme }) => ({
  width: "768px",
  height: "32px",
  textAlign: "center",
  margin: "auto",
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize,
  padding: "30px 0px 30px 0px",
  "& a": {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
}));

