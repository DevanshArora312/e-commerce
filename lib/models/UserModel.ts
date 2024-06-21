import { Product } from "./ProductModel"
import { Review } from "./ReviewModel"
export type  User = {
    _id : string,
    name : string,
    image : string,
    reviews? : [Review],
    cart? : [Product]
} 