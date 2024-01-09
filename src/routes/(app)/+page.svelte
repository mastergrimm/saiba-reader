<script lang="ts">
	import { mangaList } from "$lib/data/mangaList";
	import type Manga from "$lib/types/manga";
	import { truncateText } from "$lib/utils/truncateText";
	import { search } from "$lib/store";
	import Search from "$lib/components/Search.svelte";

	let mangaData: Manga[] = mangaList;

	function highlightSearchWord(text: string) {
		return text.replace(
			new RegExp($search, "gi"),
			(match) => `<span class="highlight">${match}</span>`
		);
	}

	$: {
		mangaData = mangaList.filter(
			(manga) =>
				manga.title.toLowerCase().includes($search.toLowerCase()) ||
				manga.author.toLowerCase().includes($search.toLowerCase())
		);
	}
</script>

<div class="home">
	<Search />
	<div class="manga__list">
		{#each mangaData as manga}
			<a href={`/${manga.slug}`} class="manga__item">
				<div class="manga__image">
					<img
						src={`./src/lib/assets/${manga.id}/${manga.cover}`}
						alt={manga.title}
					/>
				</div>
				<div class="manga__info">
					<h2>
						{@html highlightSearchWord(
							truncateText(manga.title, 22)
						)}
					</h2>
					<p>
						{@html highlightSearchWord(
							truncateText(manga.author, 28)
						)}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.home {
		@include flexbox(column, normal, normal, 2rem);
	}
	.manga__list {
		@include flexbox(row, normal, normal, 1em);

		.manga__item {
			@include flexbox(column, normal, normal, 0);
			flex-wrap: wrap;
			width: 240px;

			background-color: rgba($color: var(--clr-cards), $alpha: 0.6);
			outline: 5px solid transparent;

			overflow: hidden;

			&:hover {
				background-color: rgba($color: var(--clr-cards), $alpha: 0.8);
				outline: 5px solid var(--clr-accent);
			}

			.manga__image {
				height: 340px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
					transition: transform 0.2s ease;

					position: relative;
				}
			}

			&:hover img {
				transform: scale(1.1);
			}

			.manga__info {
				padding: var(--spacing-1);

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

	:global(.highlight) {
		color: var(--clr-accent);
	}
</style>
