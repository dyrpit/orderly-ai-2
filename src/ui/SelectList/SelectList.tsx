import React from "react";
import { MenuItem, Select, OutlinedInput, FormControl, SelectChangeEvent } from "@mui/material";

interface SelectListProps {
 field: {
  name: string;
  value: any;
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
 };
 form: {
  touched: { [field: string]: boolean };
  errors: { [field: string]: string };
 };
 name: string;
 items: string[];
}

export const SelectList: React.FC<SelectListProps> = ({ field, form, name, items }) => {
 const isError = Boolean(form.touched[name] && form.errors[name]);

 return (
  <FormControl fullWidth variant="outlined" error={isError}>
   <Select {...field} value={field.value || ""} input={<OutlinedInput label={name} />}>
    {items.map((item) => (
     <MenuItem value={item} key={item}>
      {item}
     </MenuItem>
    ))}
   </Select>
   {isError && <div>{form.errors[name]}</div>}
  </FormControl>
 );
};