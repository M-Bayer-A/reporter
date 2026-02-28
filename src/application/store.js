import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./states/form/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
