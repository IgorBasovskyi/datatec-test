import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./slices/optionSlice";
import discountCodeReducer from "./slices/discountCodeSlice";
import notesReducer from "./slices/notesSlice";

export const store = configureStore({
  reducer: {
    option: optionReducer,
    discountCode: discountCodeReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
