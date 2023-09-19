import { colorVar } from "../../Theme/variables";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: colorVar.mainBackground,
  maxWidth: "1170px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
}));

export const ContainerContent = styled(Box)(() => ({
  display: "flex",
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