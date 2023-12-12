import { createReducer, on } from "@ngrx/store";
import { lightMode, darkMode } from "./dark-mode.actions";

export const initialState: boolean = true;

export const darkModeReducer = createReducer(
  initialState,
  on(lightMode, (state) => true),
  on(darkMode, (state) => false)
);