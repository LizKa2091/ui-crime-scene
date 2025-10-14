import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";

export const store = configureStore({
   reducer: {
      modal: ModalSlice
   }
})