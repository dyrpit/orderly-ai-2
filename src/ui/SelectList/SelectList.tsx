import React, { useState, useEffect } from "react";
import {
 Checkbox,
 ListItemText,
 MenuItem,
 Select,
 OutlinedInput,
 SelectChangeEvent, // Import the SelectChangeEvent type
} from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

interface SelectListProps {
 items: string[];
 defaultSelected: string;
}

//*Need to pass items and defaultSelected props to this component
//*Ex. <SelectList items={names} defaultSelected={""}></SelectList>

export const SelectList: React.FC<SelectListProps> = (props) => {
 const { items, defaultSelected } = props; // Destructure props
 const [selectedItems, setSelectedItems] = useState<string[]>([]);
 const isDefaultSelectedValid = items.includes(defaultSelected);

 // Set the default selected item as renderValue if it's valid
 const defaultRenderValue = isDefaultSelectedValid ? defaultSelected : undefined;

 useEffect(() => {
  if (isDefaultSelectedValid) {
   // If the default selected item is valid, set it as the initial selected item
   setSelectedItems([defaultSelected]);
  } else {
   // If it's not valid, set an empty array
   setSelectedItems([]);
  }
 }, [defaultSelected, isDefaultSelectedValid]);

 const handleChange = (event: SelectChangeEvent<string[]>) => {
  setSelectedItems(event.target.value as string[]);
 };

 return (
  <Select
   value={selectedItems}
   onChange={handleChange}
   input={<OutlinedInput label="Tag" />}
   sx={{
    borderRadius: "10px",
    height: "36px",
    backgroundColor: theme.palette.info.main,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
   }}>
   {items.map((name, index) => (
    <MenuItem
     value={name}
     key={index}
     sx={{
      width: "100%",
     }}>
     {name}
    </MenuItem>
   ))}
  </Select>
 );
};
