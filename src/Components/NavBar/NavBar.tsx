import { useState } from "react";
import { NavbarContainer, Switch } from "../../ui";
import { LogoContainer, Menu } from "../Menu/Menu";
import { LoadingAPI } from "../LoadingApi/LoadingApi";

export const NavBar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <NavbarContainer>
      <LogoContainer />
      <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <LoadingAPI />
      <Menu />
    </NavbarContainer>
  );
};
