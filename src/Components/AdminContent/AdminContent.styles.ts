import { Box, styled } from "@mui/material";

export const StyledAdminContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "800px",
  height: "800px",
  borderRadius: "16px"
}));

