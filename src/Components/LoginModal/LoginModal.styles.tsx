import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalContainer = styled(Box)(({theme: any}) => ({
    backgroundColor: "#352F44",
    width: "828px",
    height: "500px",
}))

export const ModalHeader = styled(Typography)(({ theme: any }) => ({
  width: "278px",
  height: "60px",
  color: "#DBD8E3",
  fontSize: "48px",
  padding: "30px 0px 30px 0px",
  textAlign: "center",
  margin: "auto",
  fontWeight: 700,
}));

export const ModalSubHeader = styled(Typography)(({ theme: any }) => ({
  width: "288px",
  height: "20px",
  color: "#DBD8E399",
  textAlign: "center",
  padding: "0px 0px 30px 0px",
  margin: "auto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
}));

export const ModalInput = styled(TextField)(({ theme: any }) => ({
  width: "512px",
  height: "60px",
  borderRadius: "14px",
  background: "#3D3A40",
  display: "flex",
  margin: "auto",
  marginBottom: "30px",
  justifyContent: "center",
  "& input": {
    color: "#FFFFFF",
    marginLeft: "20px",
    marginRight: "20px",
  }
}));

export const ModalButton = styled(Button)(({ theme: any }) => ({
  width: "200px",
  height: "60px",
  borderRadius: "15px",
  backgroundColor: "#605287",
  display: "flex",
  margin: "auto",
  color: "#FFFFFF",
}));

export const ModalFooter = styled(Typography)(({ theme: any }) => ({
  width: "768px",
  height: "32px",
  textAlign: "center",
  margin: "auto",
  color: "#8E8E93",
  padding: "30px 0px 30px 0px",
  "& a": {
    color: "#DBD8E3",
    textDecoration: "none",
  },
}));
