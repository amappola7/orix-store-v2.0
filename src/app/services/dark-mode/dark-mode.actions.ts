import { createAction } from "@ngrx/store";

export const lightMode = createAction('[Screen Mode Button] Change to light mode');
export const darkMode = createAction('[Screen Mode Button] Change to dark mode');