import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.default,
 marginLeft: "auto",
 width: "100%",
 maxWidth: "1170px",
 minHeight: "calc(100vh - 140px)",
 marginRight: "auto",
 flexDirection: "row",
 flexWrap: "wrap",
 [theme.breakpoints.down("laptop")]: {
  width: "100%",
  display: "flex",
  justifyContent: "center",
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
