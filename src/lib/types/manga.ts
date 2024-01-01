export default interface Manga {
	id: number;
	title: string;
	slug: string;
	description: string;
	cover: string;
	author: string;
	genres: string[];
	chapters: Chapter[];
}
