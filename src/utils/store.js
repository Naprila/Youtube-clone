import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./menuSlice"
import searchSlice from "./searchSlice";
import { enableMapSet } from "immer";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";


enableMapSet();


const store = configureStore({
    reducer: {
        app: menuSlice,
        search: searchSlice,
        chat: chatSlice,
        videos: videoSlice,
    }
})


export default store;