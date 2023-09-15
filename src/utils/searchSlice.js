import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        cache: new Map(),

    },
    reducers: {
        insert: (state, action) => {
            if(state.cache.size >= 100){
                let count = 10;
                for(const [key, value] of state.cache){
                    state.cache.delete(key);
                    count--;
                    if(count <= 0){
                        break;
                    }
                }
            }else{
                const [[key, value]] = Object.entries(action.payload);
                state.cache.set(key, value);
            }
        }
    }
})

export const { insert } = searchSlice.actions;
export default searchSlice.reducer;