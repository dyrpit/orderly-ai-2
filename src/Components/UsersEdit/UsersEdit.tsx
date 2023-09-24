import { useContext } from "react";
import { UsersEditCheckbox, UsersEditButton, UsersEditContainer, UsersEditList, UsersEditListItem, UsersEditListRow } from "./UsersEdit.styles";
import { Checkbox } from "@mui/material";
import { OrderAiContext } from "../../Context/ContextProvider";
import { UserRole } from "../../Context/types";

export function UsersEdit() {
  const { users } = useContext(OrderAiContext);
  console.log(users);

  return (
    <UsersEditContainer>
      <UsersEditList>
        {users.map(({ email, id, role }) => (
          <UsersEditListRow key={id}>
            <UsersEditListItem>
              <p>Email: {email}</p>
              <UsersEditCheckbox
                control=
                {
                  <Checkbox
                    defaultChecked={role === UserRole.admin ? true : false}
                    color="primary"
                  // onChange={() => handleToggleRoleChange(id)}
                  />
                }
                label="Admin" labelPlacement="end"
              />
            </UsersEditListItem>
          </UsersEditListRow>)
        )}
      </UsersEditList>
      <UsersEditButton>Save</UsersEditButton>
    </UsersEditContainer>
  );
}

