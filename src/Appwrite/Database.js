import { Client, Databases, ID } from "appwrite";
import conf from '../conf/conf'


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

//create a watchlater 

async createWatchlater(data){

const {id , poster_path} = data


const documentId = ID.unique()
    try {
        return await this.database.createDocument(
            conf.databaseId,
            conf.collectionid,
           documentId,
            {
                id , poster_path
            }
        )
    } catch (error) {
        console.log("ERROR IN CREATE WATCHLATER" ,error)
    }
}

}

const servise = new Servise()

export default servise

