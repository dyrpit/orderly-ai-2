export enum UserRole {
 admin = "admin",
 user = "user",
 regular = "regular",
}
export interface Category {
 name: string;
 description: string;
 colour: string;
}

export interface ProductData {
 id: number;
 name: string;
 website: string;
 license: string;
 youtubeUrl: string;
 description: string;
}

export interface CategoryData {
 id: number;
 name: string;
 color: string;
 imageUrl: string;
 products: ProductData[];
}
export interface User {
 id: number;
 email: string;
 password: string;
 role: UserRole;
}
