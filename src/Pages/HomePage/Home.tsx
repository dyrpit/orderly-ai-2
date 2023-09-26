import { Category } from "../../Components";

import "./Home.css";
import { HomeGrid } from "./Home.styles";

export function Home() {
 return (
  <HomeGrid container mobile={12} desktop={12} rowGap={2}>
   <Category />
  </HomeGrid>
 );
}
