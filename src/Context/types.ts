export interface Category {
 name: string;
 categoryimageurl: string;
 color: string;
}

export interface Product {
  category: string;
  name: string;
  website: string;
  license: string;
  youTube: string;
  description: string;
}

export interface User {
 email: string;
 password: string;
 role: string;
}

