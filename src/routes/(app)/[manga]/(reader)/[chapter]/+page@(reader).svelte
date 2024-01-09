<script lang="ts">
	import type Manga from "$lib/types/manga.js";
	import Icon from "@iconify/svelte";
	import { goto } from "$app/navigation";
	import LazyImage from "$lib/components/LazyImage.svelte";

	export let data;

	let manga: Manga = data.mangaData!;
	let chapter: Chapter = data.chapterData!;
	let pages: Page[] = chapter.pages;

	const changeChapter = (event: Event) => {
		const selectedChapterId = (event.target as HTMLSelectElement).value;

		goto(`/${manga.slug}/${selectedChapterId}`);
	};

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
				<select
					name="chapter"
					id="chapter__select"
					on:change={changeChapter}
					bind:value={chapter.id}
				>
					{#each manga.chapters as chapter}
						<option value={chapter.id}>
							<span>{chapter.id}. </span>
							{chapter.title}</option
						>
					{/each}
				</select>
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
						<LazyImage
							src={`./../src/lib/assets/${manga.id}/${page.image}`}
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
		@include flexbox(row, flex-end, space-between, 1rem);

		margin: 0 0 var(--spacing-1) 0;

		@include tablet {
			@include flexbox(column, center, normal, 1rem);
			text-align: center;
		}

		.info__title {
			font-size: var(--text-2xl);
			font-weight: 700;
		}

		.info__chapter {
			font-size: var(--text-lg);
			font-weight: 400;

			select {
				padding: var(--spacing-quarter) var(--spacing-half);
				font-size: var(--text-md);

				background-color: rgba(var(--clr-cards), 0.6);

				border-radius: var(--rounded-md);

				span {
					font-weight: 700;
				}
			}

			option {
				background-color: rgba(var(--clr-cards), 1);
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

			background-color: rgba(var(--clr-accent-shade), 0.4);

			border-radius: var(--rounded-md);
			font-size: var(--text-sm);

			&:hover {
				background-color: rgba(var(--clr-accent-shade), 0.9);
				color: var(--clr-bg);
			}
		}
	}
	.controls__item {
	}
</style>
