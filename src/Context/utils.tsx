import { User, UserRole } from "./types";

export const toggleRole = (user: User) => {
  return user.role === UserRole.admin
    ? UserRole.user
    : UserRole.admin;
};