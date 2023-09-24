import { useContext, useMemo } from "react";
import { UsersEditCheckbox, UsersEditButton, UsersEditContainer, UsersEditList, UsersEditListItem, UsersEditListRow } from "./UsersEdit.styles";
import { Checkbox } from "@mui/material";
import { OrderAiContext } from "../../Context/ContextProvider";
import { UserRole } from "../../Context/types";
import useDecrypt from "../../Hooks/useDecrypt";

export function UsersEdit() {
  const { users, handleToggleRoleChange } = useContext(OrderAiContext);
  const { parseJwtToken } = useDecrypt();
  const isSingleAdmin = useMemo(() => users.filter(({ role }) => role === UserRole.admin).length <= 1, [users]);
  const user: { email: string; } | undefined = parseJwtToken();

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
                    disabled={(role === UserRole.admin && isSingleAdmin) || email === user?.email}
                    color="primary"
                    onChange={() => handleToggleRoleChange(id)}
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

