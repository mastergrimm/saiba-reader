import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	//Preview data for sake of testing purposes
	const manga = await import("$lib/data/preview");

	const chapter = manga.preview.chapters.find(
		(chapter) => chapter.id === Number(params.chapter)
	);

	if (!chapter) {
		error(404, "Chapter not found");
	}

	return {
		manga,
	};
};
