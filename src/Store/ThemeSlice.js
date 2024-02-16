import { createSlice } from "@reduxjs/toolkit";

const initialState={
    theme:{
        mode:'',
    }
}

const ThemeSlice=createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        toggleMode:(state,action)=>{
            if (action.payload==='dark') {
                state.theme.mode='dark';
            }else{
                state.theme.mode='light';
            }
        }
    }
})
//`url(LandingPageDarkModeColor.svg)`
//'linear-gradient(143deg, rgba(210,210,210,1) 0%, rgba(198,196,196,1) 27%, rgba(255,255,255,1) 46%, rgba(212,214,214,1) 66%, rgba(208,209,209,1) 80%, rgba(210,210,210,1) 100%)'

export const {toggleMode}=ThemeSlice.actions;
export default ThemeSlice.reducer;

