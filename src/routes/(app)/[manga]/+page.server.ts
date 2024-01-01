import type { PageServerLoad } from "./$types";
import { mangaList } from "$lib/data/mangaList";

export const load: PageServerLoad = async ({ params }) => {
	const mangaSlug = params.manga;
	const mangaData = mangaList.find((manga) => manga.slug === mangaSlug);

	if (!mangaData) {
		return { status: 404, error: new Error("Manga not found") };
	}

	return {
		mangaData,
	};
};
