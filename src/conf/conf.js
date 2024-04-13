const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    usercollectionid: String(import.meta.env.VITE_APPWRITE_USER_COLLECTIONID),
    watchlatercollectionid: String(import.meta.env.VITE_APPWRITE_WATCHLATER_COLLECTIONID),
    storageid: String(import.meta.env.VITE_APPWRITE_STORAGEID),
    OpenAiKey : String(import.meta.env.VITE_OPENAI_KEY)
}

export default conf