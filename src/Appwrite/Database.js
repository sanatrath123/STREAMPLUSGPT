import { Client, Databases, ID ,Storage } from "appwrite";
import conf from '../conf/conf'
import {useSelector} from 'react-redux'

export class Servise {
    client = new Client()
  database ;
  collection;


  constructor (){
    this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.projectId)
    this.database = new Databases(this.client)
    
  }


  //add user to the database
  async CreateUser(data){
const {name, email , $id} = data
const id = $id
try {
    return await this.database.createDocument(
      conf.databaseId,
      conf.usercollectionid,
      ID.unique(),
      {
        name , email ,id
      }
    )
} catch (error) {
    console.log("error in add user databse", error)
    return error
}
  }

//create a watchlater 

async createWatchlater(id, poster_path, subscriber) {
  try {
      // Convert id to string
      id = id.toString();

      // Generate a unique document ID
      const documentId = ID.unique();

      // Create a new document in the watchlater collection
      const addToWL = await this.database.createDocument(
          conf.databaseId,
          conf.watchlatercollectionid,
          documentId,
          {
              id,
              poster_path
          }
      );

      // Check if the watch-later item was successfully added
      if (!addToWL) {
          throw new Error("Failed to add watch-later item.");
      }

      // Retrieve the user document
      const userDB = await this.database.getDocument(
          conf.databaseId,
          conf.usercollectionid,
          subscriber
      );

      // Add the newly created watch-later item ID to the user's watch-later array
      userDB.watchlater.push(addToWL.$id);

      // Update the user document with the modified watch-later array
      await this.database.updateDocument(
          conf.databaseId,
          conf.usercollectionid,
          subscriber,
          { watchlater: userDB.watchlater }
      );

      console.log("Watch-later item added to user successfully.");
  } catch (error) {
      console.log("ERROR IN CREATE WATCHLATER", error);
  }
}


//get userdatabase 
async GetUserData( currentuserid){
try {
  const documnets = await this.database.listDocuments(conf.databaseId , conf.usercollectionid)
  if(documnets){
    
    const data =   documnets.documents.filter((doc)=>(
     doc.id == currentuserid))
return data
  }
  else{
    console.log("There is no users in database")
  }
} catch (error) {
  console.log(error)
}
}


}

const servise = new Servise()

export default servise

