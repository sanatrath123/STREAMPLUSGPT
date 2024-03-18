const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    collectionid: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    OpenAiKey : String(import.meta.env.VITE_OPENAI_KEY)
}

export default conf