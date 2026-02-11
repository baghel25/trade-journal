import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "../features/journal/journalSlice";
import { saveState } from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    journal: journalReducer
  }
});

store.subscribe(() => {
  saveState(store.getState().journal);
});
