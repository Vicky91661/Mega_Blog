import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();            
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({name,email,password}){
        try {
            const userAccount = await this.account.create(ID.unique(),name, email, password);
            if (userAccount){
                // then login 
                return this.login({email,password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }  
    }

    
    async login({email,password}){
        try {
            return await account.createEmailSession(email, password);  
        } catch (error) {
            throw error;
        }
    }
    
    async getCurrentUser()
    {
        try {
            const user=await this.account.get();
            return user;
        } catch (error) {
            console.log("Aaapwrite service :: getCurrentUser :: error",error);
           
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Aaapwrite service :: logout :: error", error);
            throw error;
        }
    }
}


const authService = new AuthService();
export default authService