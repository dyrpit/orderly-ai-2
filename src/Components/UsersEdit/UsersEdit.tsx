import { useContext } from "react";
import { UsersEditCheckbox, UsersEditButton, UsersEditContainer, UsersEditList, UsersEditListItem, UsersEditListRow } from "./UsersEdit.styles";
import { Checkbox } from "@mui/material";
import { UserContext } from "../../Context/userContext/UserContextProvider";



export function UsersEdit() {
  const { users } = useContext(UserContext); // Rename contextUserData to avoid conflicts\

  const test = () => {
    console.log(users); // Use localUserData
  }

 return (
  <UsersEditContainer>
   <UsersEditList>
    {users.map((user) => (
     <UsersEditListRow key={user.email}>
      <UsersEditListItem>
       Email: {user.email}
       <UsersEditCheckbox control={<Checkbox color="primary" />} label="Admin" labelPlacement="end" />
      </UsersEditListItem>
     </UsersEditListRow>
    ))}
   </UsersEditList>
   <UsersEditButton onClick={test}>Save to JSON</UsersEditButton>
  </UsersEditContainer>
 );
}
