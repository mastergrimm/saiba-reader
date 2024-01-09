import { writable, readable } from "svelte/store";

export const search = writable("");
export const readingmode = writable("continuous");
export const columns = writable("single");
export const theme = writable("dark");
