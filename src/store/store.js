import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "./AuthSlice";
import MoviesResuser from './MovieSlice'

const Store = configureStore({

reducer:{
    auth: AuthReduser,
   movies: MoviesResuser
}

})

export default Store