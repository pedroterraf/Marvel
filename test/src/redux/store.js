import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";

export default configureStore({
    reducer: {
        character: authSlice.reducer,
    },
})
