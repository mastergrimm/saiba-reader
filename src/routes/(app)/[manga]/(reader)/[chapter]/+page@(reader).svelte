<script lang="ts">
	import type Manga from "$lib/types/manga.js";
	import Icon from "@iconify/svelte";

	export let data;

	let manga: Manga = data.mangaData!;
	let chapter: Chapter = data.chapterData!;
	let pages: Page[] = chapter.pages;

	$: {
		manga = data.mangaData!;
		chapter = data.chapterData!;
		pages = chapter.pages;
	}
</script>

<div class="chapter">
	<div class="reader">
		<div class="info">
			<a href={`/${manga.slug}`} class="info__title">{manga?.title}</a>
			<div class="info__chapter">
				<span>Chapter {chapter.id}:</span>
				{chapter.title}
			</div>
		</div>
		<div class="preview">
			<div class="controls">
				{#if chapter.id > 1}
					<a
						href={`/${manga.slug}/${chapter.id - 1}`}
						class="controls__prev controls__item"
					>
						<Icon icon="mdi:chevron-left" width="32" height="32" />
						<div class="controls__name">Previous Chapter</div>
					</a>
				{:else}
					<div></div>
				{/if}

				{#if chapter.id < manga.chapters.length}
					<a
						href={`/${manga.slug}/${chapter.id + 1}`}
						class="controls__next controls__item"
					>
						<div class="controls__name">Next Chapter</div>
						<Icon icon="mdi:chevron-right" width="32" height="32" />
					</a>
				{/if}
			</div>
			{#each pages as page}
				<div class="preview__panel">
					{#key page.id}
						<img
							src={`./../src/lib/assets/${manga.id}/${page.image}`}
							alt="Preview"
						/>
					{/key}
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
				font-weight: 700;
			}
		}
	}

	.controls {
		@include flexbox(row, center, space-between, 1rem);
		width: 100%;
		user-select: none;

		.controls__item {
			@include flexbox(row, center, normal, 0.2rem);
			padding: var(--spacing-quarter) var(--spacing-half);

			background-color: rgba(var(--clr-cards), 0.6);

			&:hover {
				background-color: rgba(var(--clr-cards), 1);
			}
		}
	}
	.controls__item {
	}
</style>
