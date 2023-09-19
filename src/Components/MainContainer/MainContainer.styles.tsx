import { colorVar } from "../../Theme/variables";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

<<<<<<< HEAD
export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: colorVar.mainBackground,
  display: "flex",
  maxWidth: "1170px",
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "column",
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
}));
=======
export const Container = styled(Box)(() => ({
    backgroundColor: colorVar.mainBackground,
    display: 'flex',
    width: "1170px",
    height: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    paddingTop: '100px',
}))
>>>>>>> 7976d481f2f9f62d43e4bc0885a0ca2ded8bd164

export const ContainerContent = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
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
