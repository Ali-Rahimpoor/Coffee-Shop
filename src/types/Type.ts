export type TProduct = {
    title:string,
    price:number,
    discount:number,
    rating:number,
    image:string
    id:number;
}

export type TBlog = {
    title:string,
    day:number,
    month:string,
    year:number,
    image:string
}

export interface ICart extends TProduct{
    cartQty: number;
    id:number;
}