import { useState } from "react";
import { NavbarContainer, Switch } from "../../ui";
import { LogoContainer, NavBarIcons } from "../../ui/NavBarIcons/NavBarIcons";

export const NavBar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <NavbarContainer>
      <LogoContainer />
      <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
      <NavBarIcons />
    </NavbarContainer>
  );
};