import React from "react";
import { Checkbox, MenuItem, Select, OutlinedInput, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

interface SelectListCheckmarksProps {
 field: {
  name: string;
  value: any;
  onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void;
  onBlur: (event: React.FocusEvent<any, Element>) => void;
 };
 form: {
  touched: { [field: string]: boolean };
  errors: { [field: string]: string };
 };
 name: string;
 items: string[];
}

export const SelectListCheckmarks: React.FC<SelectListCheckmarksProps> = ({ field, form, name, items }) => {
 const isError = Boolean(form.touched[name] && form.errors[name]);

 return (
  <FormControl fullWidth variant="outlined" error={isError}>
   <Select {...field} value={field.value || []} multiple input={<OutlinedInput label={name} />} renderValue={(selected) => (selected as string[]).join(", ")}>
    {items.map((item) => (
     <MenuItem key={item} value={item}>
      <Checkbox checked={(field.value as string[]).indexOf(item) > -1} />
      {item}
     </MenuItem>
    ))}
   </Select>
   {isError && <div>{form.errors[name]}</div>}
  </FormControl>
 );
};
