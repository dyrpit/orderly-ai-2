import { CustomButton } from "../../ui";

export function AdminPanel() {
 const adminPanelStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };
 return (
  <>
   <CustomButton sx={adminPanelStyles}>Admin Panel</CustomButton>
  </>
 );
}
