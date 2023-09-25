import React, { useState, useEffect } from "react";
import { MenuItem, Select, OutlinedInput, SelectChangeEvent } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

interface SelectListProps {
 items: string[];
 defaultSelected: string;
}

export const SelectList: React.FC<SelectListProps> = (props) => {
 const { items, defaultSelected } = props;
 const [selectedItems, setSelectedItems] = useState<string[]>([]);
 const isDefaultSelectedValid = items.includes(defaultSelected);

 useEffect(() => {
  if (isDefaultSelectedValid) {
   setSelectedItems([defaultSelected]);
  } else {
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
