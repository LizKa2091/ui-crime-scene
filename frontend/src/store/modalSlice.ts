import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      activeModal: null,
      modalData: null
   },
   reducers: {
      showModal: (state, action) => {
         state.activeModal = action.payload.activeModal;

         if (action.payload.modalData !== undefined) {
            state.modalData = action.payload.modalData;
         }
         
      },
      hideModal: (state) => {
         state.activeModal = null;
      }
   }
})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;