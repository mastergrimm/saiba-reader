<script lang="ts">
	import type Manga from "$lib/types/manga.js";

	export let data;

	let manga: Manga = data.mangaData!;
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
			<div class="manga__description">{manga.description}</div>
		</div>
	</div>
	<div class="chapter__list">
		{#each manga.chapters as chapter}
			<a href={`/${manga.id}/${chapter.id}`} class="chapter__item">
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
		@include flexbox(row, normal, normal, 1em);
	}

	.manga__cover {
		width: 200px;
		height: 300px;
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
