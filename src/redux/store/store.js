import {configureStore } from "@reduxjs/toolkit"
import {counterSlice} from "../state/counter/counterSlice.js";

export default configureStore ({

    reducer:{
        counter:counterSlice
    }

})