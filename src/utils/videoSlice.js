import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_INFINITE_SCROLL } from "./constants";


const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
    },
    reducers:{
        addVideos: (state, action) => {
            // console.log("PAYLOAD:", action.payload);
            if(state.videos.length < OFFSET_INFINITE_SCROLL){
                state.videos.push(...action.payload);
            }
        }
    }
})


export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;