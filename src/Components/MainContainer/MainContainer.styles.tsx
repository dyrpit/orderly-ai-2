import { colorVar } from "../../Theme/variables";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: colorVar.mainBackground,
  maxWidth: "1170px",
  marginLeft: "auto",
  minHeight: "85vh",
  width: "1170px",
  marginRight: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
  [theme.breakpoints.down("mobile")]: {
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  },
}));

export const ContainerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const smallScreenStyles = `
  @media (max-width: 1170px) {
    ${Container} {
      width: 100%;
    }
  }
`;
export default smallScreenStyles;