import { Client, Account ,ID } from 'appwrite';
import conf from '../conf/conf'

class Authservice {
     client = new Client()
      account 

      constructor(){
this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.projectId);

    this.account = new Account(this.client)
      }

//signup 
async CreateAccount(data) {
    const {name , email , password , phone} = data
    try {
        const UserAccount = await this.account.create(ID.unique() ,email ,password ,name ,phone)
        if(UserAccount){
            return UserAccount
           }
    } catch (error) {
        console.log("ERROR IN SIGNUP SERVICE",error)
    }
}

//login 
async LoginAccount(data){
    const {email , password}= data

    try {
        const User = await this.account.createEmailSession(email ,password)
        if(User){
            return User
           }
    } catch (error) {
        console.log("ERROR IN LOGIN SERVICES", error)
    }
}

//Logout 
async LogoutAccount(){
try {
    const User = await this.account.deleteSession()
  console.log(User)
} catch (error) {
    console.log("ERROR IN LOGOUT SERVICE", error)
}
}

//Getcurrent user 

async GetCurrentUser (){
    try {
       const user = await this.account.get()
       if(user){
        return user
       }
    } catch (error) {
      console.log("ERROR IN GET::CURRENT::USER",error)  
    }
}

}

const authService = new Authservice
export default authService