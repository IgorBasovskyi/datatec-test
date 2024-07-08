import { createSlice } from "@reduxjs/toolkit";

const discountCodePattern = /^[A-Z]{4,16}\d{2,4}$/;

const discountCodeSlice = createSlice({
  name: "discountCode",
  initialState: {
    code: "",
    isValid: true,
  },
  reducers: {
    setDiscountCode: (state, action) => {
      state.code = action.payload;
      state.isValid = discountCodePattern.test(action.payload);
    },
  },
});

export const { setDiscountCode } = discountCodeSlice.actions;
export default discountCodeSlice.reducer;
