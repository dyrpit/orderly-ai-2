import { useState } from "react";

export const useVariable = () => {
  const [value, setValue] = useState(99); // Updated from User
  const [editUsersVisible, setEditUserVisible] = useState(false);

  const handleEditUserVisible = () => {
    setEditUserVisible(!editUsersVisible);
  };
  const handleValueChange = () => {
    setValue(value + 1); // Updated from User
  };

  return {
    value, // Updated from User
    handleValueChange,
    editUsersVisible,
    handleEditUserVisible,
  };
};
