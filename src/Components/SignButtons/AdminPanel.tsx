import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../ui";
import useAuth from "../../Hooks/useAuth";

export function AdminPanel() {
 const navigate = useNavigate();
 const { getIsTokenExist } = useAuth();

 const adminPanelStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };

 function goToAdminPanel() {
  if (getIsTokenExist()) {
   navigate("/admin");
  } else {
   alert("Log in to get to the admin panel!");
  }
 }
 return (
  <>
   <CustomButton sx={adminPanelStyles} onClick={goToAdminPanel}>
    Admin Panel
   </CustomButton>
  </>
 );
}
