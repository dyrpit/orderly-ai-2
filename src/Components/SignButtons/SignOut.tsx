import { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import { CustomButton } from "../../ui";
import { OrderAiContext } from "../../Context/ContextProvider";

export function SignOut() {
 const { removeAuthToken } = useAuth();
 const { clearLoggedUserEmail, clearLoggedUserRole } = useContext(OrderAiContext);
 const signOutStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };

 const handleOnSignOut = () => {
  removeAuthToken();
  clearLoggedUserRole();
  clearLoggedUserEmail();
 };

 return (
  <>
   <CustomButton sx={signOutStyles} onClick={handleOnSignOut}>
    Sign Out
   </CustomButton>
  </>
 );
}
