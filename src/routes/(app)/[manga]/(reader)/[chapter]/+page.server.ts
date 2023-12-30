import type { PageServerLoad } from "./$types";
import { mangaList } from "$lib/data/mangaList";

export const load: PageServerLoad = async ({ params }) => {
	const mangaId = params.manga;
	const mangaData = mangaList.find((manga) => manga.id === Number(mangaId));
	const chapterId = params.chapter;
	const chapterData = mangaData?.chapters.find(
		(chapter) => chapter.id === Number(chapterId)
	);

	if (!mangaData) {
		return { status: 404, error: new Error("Manga not found") };
	}

	if (!chapterData) {
		return { status: 404, error: new Error("Chapter not found") };
	}

	return {
		mangaData,
		chapterData,
	};
};
