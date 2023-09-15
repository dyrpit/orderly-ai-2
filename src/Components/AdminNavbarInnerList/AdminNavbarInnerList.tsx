import { ANArrow, ANInnerList, ANInnerListItemCategory, ANListItemText } from "./AdminNavbarInnerList.styles";

export function AdminNavbarInnerList() {
 return (
  <ANInnerList>
   <ANInnerListItemCategory>
    <ANArrow></ANArrow>
    <ANListItemText>ChatBots</ANListItemText>
   </ANInnerListItemCategory>
  </ANInnerList>
 );
}
