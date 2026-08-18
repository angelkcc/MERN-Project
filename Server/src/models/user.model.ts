
import mongoose from "mongoose";
enum Role{
    USER="USER",
    ADMIN="ADMIN" ,
}
interface IUser extends Document{
    full_name:string;
    email:string;
    password:string;
    role:Role;
    profile_image?:string;

}

const userSchema= new mongoose.Schema<IUser>({
    full_name:{
        type:String,
        required:[true,"Full name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:String,
        enum:Object.values(Role),
        default:Role.USER
    },
    profile_image:{
        type:String
    }
}, {timestamps:true});

const User=mongoose.model<IUser>("User",userSchema);
export default User;