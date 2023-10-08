export interface Product {
    imageCover:string,
    price:number,
    ratingsAverage:number,
    title:string,
    category:Category
    id:string
    description?:string,
    images?:string[]
}

interface Category{
    name:string
}
