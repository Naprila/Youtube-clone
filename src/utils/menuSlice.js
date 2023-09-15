import { createSlice } from "@reduxjs/toolkit";



const menuSlice = createSlice({
    name: "menuSlice",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toogleMenu: (state, action) => {
            state.isMenuOpen = action.payload
        },
    }
})


export const { toogleMenu } = menuSlice.actions;

export default menuSlice.reducer;