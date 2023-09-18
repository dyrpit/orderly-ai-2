import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const LoginModalContainer = styled(Box)(({theme: theme}) => ({
    backgroundColor: theme.palette.background.default,
    width: "828px",
    height: "500px",
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
  "& input": {
    color: fontSizeVar.loginModalDefault,
    marginLeft: "20px",
    marginRight: "20px",
  }
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

import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const LoginModalContainer = styled(Box)(({ theme: theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  width: "828px",
  height: "500px",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));

export const ModalHeader = styled(Typography)(({ theme: theme }) => ({
  width: "278px",
  lineHeight: 0,
  padding: "30px 0px 30px 0px",
  height: "60px",
  color: theme.palette.text.primary,
  fontSize: fontSizeVar.loginModalHeader,
  textAlign: "center",
  margin: "auto",
  fontWeight: theme.typography.fontWeightBold,
}));

export const ModalSubHeader = styled(Typography)(({ theme: theme }) => ({
  width: "288px",
  height: "20px",
  lineHeight: 0,
  color: theme.palette.text.secondary,
  textAlign: "center",
  padding: "0px 0px 30px 0px",
  margin: "auto",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
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
  "& input": {
    width: "472px",
    marginLeft: "20px",
    marginRight: "20px",
    overflow: "hidden",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    "& input": {
      width: "100%",
    },
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
  },
}));

export const ModalFooter = styled(Typography)(({ theme: theme }) => ({
  width: "768px",
  height: "32px",
  textAlign: "center",
  margin: "auto",
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize,
  padding: "0px 0px 30px 0px",
  "& a": {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    "& a": {
      width: "50%",
    },
  },
}));
