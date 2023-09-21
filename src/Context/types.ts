export interface Category {
  name: string;
  description: string;
  colour: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface ProductType {
  category: string;
  name: string;
  website: string;
  license: string;
  youTube: string;
  description: string;
}
