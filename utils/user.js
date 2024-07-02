import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function createUserWithAccount({name,email, password}) {

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                accounts:{
                    create:{
                        type: "credentials",
                        provider: "email",
                        providerAccountId: uuidv4(),
                    }
                }
            },
            include :{
                accounts: true
            
            }
        })
        return user
        
    } catch (error) {
        console.log("Error creating the user ",error)
        throw error
    }

}

export async function getUserByEmail(email) {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user
    }catch(error){
        console.log("Error getting the user by email ",error)
        throw error
    }
}