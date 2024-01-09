import { writable, readable } from "svelte/store";
import { browser } from "$app/environment";

export const search = writable("");
export const readingmode = writable(
	(browser && localStorage.getItem("readingmode")) || "continuous"
);
export const columns = writable(
	(browser && localStorage.getItem("columns")) || "single"
);
export const theme = writable(
	(browser && localStorage.getItem("theme")) || "dark"
);

readingmode.subscribe((value) => {
	browser && localStorage.setItem("readingmode", value);
});

columns.subscribe((value) => {
	browser && localStorage.setItem("columns", value);
});

theme.subscribe((value) => {
	browser && localStorage.setItem("theme", value);
});
