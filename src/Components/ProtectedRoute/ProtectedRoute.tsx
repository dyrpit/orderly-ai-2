import { Navigate } from "react-router-dom";
import useDecrypt from "../../Hooks/useDecrypt";
import { UserRole } from "../../Context/types";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
 const { parseJwtToken } = useDecrypt();
 const user: { role: UserRole } | undefined = parseJwtToken();

 if (!user || user.role !== UserRole.admin) {
  return <Navigate to="/" replace />;
 }

 return children;
};
