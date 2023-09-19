import { CustomButton } from "../../ui";

export function SignIn() {
 const signInStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };
 return (
  <>
   <CustomButton sx={signInStyles}>Sign In</CustomButton>
  </>
 );
}
