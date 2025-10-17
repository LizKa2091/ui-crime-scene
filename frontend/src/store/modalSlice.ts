import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      activeModal: null,
      modalData: null
   },
   reducers: {
      showModal: (state, action) => {
         state.activeModal = action.payload;
         state.modalData = action.payload.data ?? null;
      },
      hideModal: (state) => {
         state.activeModal = null;
         state.modalData = null;
      }
   }
})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;