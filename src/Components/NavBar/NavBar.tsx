import { useState } from "react";
import { NavbarContainer, Switch } from "../../ui";

export const NavBar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <NavbarContainer>
      <div>1</div>
      <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
      <div>1</div>
    </NavbarContainer>
  );
};