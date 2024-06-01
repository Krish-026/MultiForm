import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {},
};

const NAME = 'form';

// return the form data from the state
export const selectFormData = (state) => state.form.formData;

export const formSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
      updateFormData: (state, action) => {
          console.log('action.payload', action.payload)
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
