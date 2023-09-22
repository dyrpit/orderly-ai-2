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
 email: string;
 password: string;
 role: string;
}
