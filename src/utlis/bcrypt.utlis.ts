//hash password
//when we use crypto the input and output are same which isnt effective so we use bcrypt which is a hashing algorithm that is designed 
// to be slow and computationally expensive to make 
// it more secure against brute force attacks. It also adds a salt to the password before hashing it,
//  which makes it more difficult for attackers to use precomputed tables (rainbow tables) to crack the password.

import bcrypt from "bcryptjs";

export const hashPassword= async(password:string):Promise<string>=>{
    try{
        const salt= await bcrypt.genSalt(10); //generate salt with 10 rounds
        return await bcrypt.hash(password,salt); //hash password with salt
    } catch(error){
        console.error(error);
        throw error;
    }
    
};

//compare password