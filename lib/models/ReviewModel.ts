import {User} from "./UserModel";
export type  Review = {
    _id : string,
    content : string,
    rating : number,
    author : User
} 