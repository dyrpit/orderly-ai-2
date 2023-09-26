import { ANButton, ANButtonSmall, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useContext, useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";
import useDecrypt from "../../Hooks/useDecrypt";
import { User, UserRole } from "../../Context/types";
import { OrderAiContext } from "../../Context/ContextProvider";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);
 const { jsonData, categories } = useContext(OrderAiContext);
 const { parseJwtToken } = useDecrypt();
 const user: User | undefined = parseJwtToken();

 const toggleListVisibility = () => {
  setListVisible(!isListVisible);
 };

 return (
  <ANContainer>
   <ANButton sx={{ height: "60px" }} onClick={toggleListVisibility}>
    Categories/Items
   </ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
      {user && user.role === UserRole.admin ? <ANButtonSmall>New Category</ANButtonSmall> : null}
     </Link>
     <Link to="/admin/additem/" style={{ textDecoration: "none" }}>
      {user && user.role === UserRole.admin ? <ANButtonSmall>New Item</ANButtonSmall> : null}
     </Link>
     {(jsonData && jsonData.length > 0 ? jsonData : categories)?.map((categoryData, index) => <AdminNavbarListCategory category={categoryData} key={index} />)}{" "}
    </ANList>
   </Fade>
   <Link to="/admin/edituser" style={{ textDecoration: "none" }}>
    {user && user.role === UserRole.admin ? <ANButton>Edit Users</ANButton> : null}
   </Link>
  </ANContainer>
 );
}
