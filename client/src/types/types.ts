export type ChildrenProps = {
    children: React.ReactNode
}

export type User = {
    accessToken: string;
}

export type Product = { id?:number, name: string; description: string; price: number; }

export type LoginDto = {
    email: string;
    password: string;
}