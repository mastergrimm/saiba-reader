<script lang="ts">
	import type Manga from "$lib/types/manga.js";

	export let data;

	let manga: Manga = data.mangaData!;
	let chapter: Chapter = data.chapterData!;
	let pages: Page[] = chapter.pages;
</script>

<div class="chapter">
	<div class="reader">
		<div class="info">
			<a href={`/${manga.id}`} class="info__title">{manga?.title}</a>
			<div class="info__chapter">
				<span>Chapter {chapter.id}</span>
				{chapter.title}
			</div>
		</div>
		<div class="preview">
			{#each pages as page}
				<div class="preview__panel">
					<img
						src={`./../src/lib/assets/${manga.id}/${page.image}`}
						alt="Preview"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.chapter {
		@include flexbox(column, center, center, 1rem);
	}

	.reader {
		@include flexbox(column, normal, normal, 1rem);

		max-width: 840px;
	}

	.preview {
		@include flexbox(column, center, center, 1rem);
	}

	.info {
		.info__title {
			font-size: var(--text-2xl);
			font-weight: 700;
		}

		.info__chapter {
			font-size: var(--text-lg);
			font-weight: 400;

			span {
				color: var(--clr-accent);
			}
		}
	}
</style>
