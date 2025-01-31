import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  notes: string[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
