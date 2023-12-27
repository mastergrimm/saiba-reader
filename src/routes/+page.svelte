<script lang="ts">
	import { mangaList } from "$lib/data/mangaList";
	import type Manga from "$lib/types/manga";
	import { truncateText } from "$lib/utils/truncateText";

	let mangaData: Manga[] = mangaList;
</script>

<div class="manga__list">
	{#each mangaData as manga}
		<a href={`/${manga.id}`} class="manga__item">
			<img
				src={`./src/lib/assets/${manga.id}/${manga.cover}`}
				alt={manga.title}
			/>
			<div class="manga__info">
				<h2>{truncateText(manga.title, 22)}</h2>
				<p>{truncateText(manga.author, 28)}</p>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	.manga__list {
		@include flexbox(row, normal, normal, 1em);

		padding: var(--spacing-6);

		.manga__item {
			@include flexbox(column, normal, normal, 1em);
			width: 100%;
			max-width: 240px;
			padding: var(--spacing-1);

			background-color: rgba($color: var(--clr-cards), $alpha: 0.6);

			&:hover {
				background-color: rgba($color: var(--clr-cards), $alpha: 0.8);
			}

			img {
				width: 100%;
				height: 300px;
			}

			.manga__info {
				h2 {
					font-weight: 800;
					letter-spacing: 0.02em;
					text-align: center;
				}

				p {
					font-weight: 300;
					letter-spacing: 0.02em;
					text-align: center;
				}
			}
		}
	}
</style>
