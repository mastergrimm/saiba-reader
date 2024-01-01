<script lang="ts">
	import type Manga from "$lib/types/manga.js";

	export let data;

	let manga: Manga = data.mangaData!;

	let chapterAmount: number;

	$: {
		chapterAmount = manga.chapters.length;
	}
</script>

<div class="manga">
	<div class="manga__header">
		<div class="manga__cover">
			<img
				src={`./src/lib/assets/${manga.id}/${manga.cover}`}
				alt={manga.title}
			/>
		</div>
		<div class="manga__info">
			<div class="manga__title">{manga.title}</div>
			<div class="manga__author">{manga.author}</div>
			<div class="manga__description">{manga.description}</div>
			<div class="manga__length">Released Chapters: {chapterAmount}</div>
		</div>
	</div>
	<div class="chapter__list">
		{#each manga.chapters as chapter}
			<a href={`/${manga.slug}/${chapter.id}`} class="chapter__item">
				<div class="chapter__info">
					<div class="chapter__id">Chapter {chapter.id}</div>
					<div class="chapter__title">{chapter.title}</div>
				</div>
				<div class="chapter__date">{chapter.date}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.manga__header {
		@include flexbox(row, center, normal, 3em);
	}

	.manga__cover {
		width: 240px;
		height: 340px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.manga__info {
		flex: 1;

		@include flexbox(column, normal, normal, 0.5em);

		.manga__title {
			font-size: var(--text-2xl);
			font-weight: 700;
		}

		.manga__author {
			color: var(--clr-accent);
		}

		.manga__description {
			font-size: var(--text-base);
			font-weight: 300;
			letter-spacing: 0.02em;
			line-height: 1.5;
		}
	}

	.chapter__list {
		@include flexbox(column, normal, normal, 1em);

		padding: var(--spacing-2) 0;

		.chapter__item {
			@include flexbox(row, center, space-between, 1em);
			width: 100%;

			background-color: rgba($color: var(--clr-cards), $alpha: 0.4);
			padding: var(--spacing-1);

			&:hover {
				background-color: rgba($color: var(--clr-cards), $alpha: 0.6);
			}

			.chapter__info {
				@include flexbox(row, normal, normal, 0.5em);

				.chapter__id {
					font-weight: 800;
					letter-spacing: 0.02em;
				}

				.chapter__title {
					font-weight: 300;
					letter-spacing: 0.02em;
				}
			}

			.chapter__date {
				font-weight: 300;
			}
		}
	}
</style>
