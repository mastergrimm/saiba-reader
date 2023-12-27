import type { PageServerLoad } from "./$types";
import { mangaList } from "$lib/data/mangaList";

export const load: PageServerLoad = async ({ params }) => {
	const mangaId = params.manga;
	const mangaData = mangaList.find((manga) => manga.id === Number(mangaId));

	if (!mangaData) {
		return { status: 404, error: new Error("Manga not found") };
	}

	return {
		mangaData,
	};
};
