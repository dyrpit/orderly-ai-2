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

interface SelectListCheckmarksProps {
 items: string[];
 defaultSelected: string;
}

//*Need to pass items and defaultSelected props to this component
//*Ex. <SelectListCheckmarks items={names} defaultSelected={""}></SelectListCheckmarks>

export const SelectListCheckmarks: React.FC<SelectListCheckmarksProps> = (props) => {
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
   labelId="demo-multiple-checkbox-label"
   id="demo-multiple-checkbox"
   multiple
   value={selectedItems}
   onChange={handleChange}
   input={<OutlinedInput label="Tag" />}
   renderValue={(selected) => selected.join(", ")}
   sx={{ borderRadius: "10px", height: "36px", backgroundColor: theme.palette.info.main, width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
   {items.map((name) => (
    <MenuItem value={name}>{name}</MenuItem>
   ))}
  </Select>
 );
};
