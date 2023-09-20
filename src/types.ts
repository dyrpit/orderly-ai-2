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

export interface Item {
 category: string;
 name: string;
 link: string;
 type: string;
 youtubeDemo: string;
 description: string;
}
