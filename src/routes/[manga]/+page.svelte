<script lang="ts">
	import type Manga from "$lib/types/manga.js";

	export let data;

	let manga: Manga = data.mangaData!;
</script>

<div class="manga">
	<div class="manga__header">
		<div class="manga__cover">
			<img
				src={`./src/lib/assets/preview/${manga.cover}`}
				alt={manga.title}
			/>
		</div>
		<div class="manga__info">
			<div class="manga__title">{manga.title}</div>
			<div class="manga__description">{manga.description}</div>
		</div>
	</div>
</div>

<style lang="scss">
	.manga {
		padding: var(--spacing-6);
	}

	.manga__header {
		@include flexbox(row, normal, normal, 1em);
	}

	.manga__cover {
		width: 200px;
		height: 300px;
	}
</style>
