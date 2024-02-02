import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "./AuthSlice";

const Store = configureStore({

reducer:{
    auth: AuthReduser,
}

})

export default Store