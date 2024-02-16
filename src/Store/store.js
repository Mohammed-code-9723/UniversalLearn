import { configureStore } from "@reduxjs/toolkit";
import Theme from './ThemeSlice';

export const store=configureStore({
    reducer:Theme
})