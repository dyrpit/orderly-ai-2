import useAuth from "../../Hooks/useAuth";
import { CustomButton } from "../../ui";

export function SignOut() {
 const { removeAuthToken } = useAuth();
 const signOutStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };

 return (
  <>
   <CustomButton sx={signOutStyles} onClick={removeAuthToken}>
    Sign Out
   </CustomButton>
  </>
 );
}
