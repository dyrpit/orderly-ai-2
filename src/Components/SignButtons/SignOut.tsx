import { CustomButton } from "../../ui";

export function SignOut() {
 const signOutStyles = {
  display: "flex",
  margin: "0",
  scale: "0.8",
  marginLeft: "auto",
 };
 return (
  <>
   <CustomButton sx={signOutStyles}>Sign Out</CustomButton>
  </>
 );
}
