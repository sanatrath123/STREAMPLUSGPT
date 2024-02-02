const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASEID)
}

export default conf