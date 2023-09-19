import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { CustomButton } from "../../ui";
export function SignIn() {
 const signInStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };
 const { handleSignInClick } = useContext(OrderAiContext);

 return (
  <>
   <CustomButton sx={signInStyles} onClick={handleSignInClick}>
    Sign In
   </CustomButton>
  </>
 );
}
