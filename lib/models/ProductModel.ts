import { Review } from "./ReviewModel"

export type  Product = {
    id : string,
    name : string,
    image : string,
    colors? : string[],
    sizes? : string[],
    description : string,
    rating : number,
    reviews? : Review[],
    reviewNum : number,
    category : string,
    brand : string,
    price : number,
    hasLens : boolean,
    prescreption? : string,
    prescImage? : string ,
    inStock : boolean
} 