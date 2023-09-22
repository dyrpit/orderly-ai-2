export enum UserRole {
  admin = "admin",
  user = "user"
}
export interface Category {
  name: string;
  description: string;
  colour: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}

export interface ProductType {
  category: string;
  name: string;
  website: string;
  license: string;
  youTube: string;
  description: string;
}
