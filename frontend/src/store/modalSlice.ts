import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      activeModal: null
   },
   reducers: {
      showModal: (state, action) => {
         state.activeModal = action.payload
      },
      hideModal: (state) => {
         state.activeModal = null
      }
   }
})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;