import { Navigate } from "react-router-dom";
import useDecrypt from "../../Hooks/useDecrypt";
import { User } from "../../Context/types";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
 const { parseJwtToken } = useDecrypt();
 const user: User | undefined = parseJwtToken();

 if (!user) {
  return <Navigate to="/" replace />;
 }

 return children;
};
