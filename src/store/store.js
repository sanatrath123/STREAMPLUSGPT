import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "./AuthSlice";
import MoviesResuser from './MovieSlice'
import LangReducer from './LangSlice'


const Store = configureStore({

reducer:{
    auth: AuthReduser,
   movies: MoviesResuser,
   Lang: LangReducer
}

})

export default Store