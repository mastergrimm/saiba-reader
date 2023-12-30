<script lang="ts">
	import Search from "$lib/components/Search.svelte";
</script>

<header>
	<h1>
		<a href="/">Saiba Manga & Comic Reader</a>
	</h1>
	<Search />
</header>

<style lang="scss">
	header {
		@include flexbox(column, normal, normal, 1rem);

		padding: 0 0 var(--spacing-2) 0;
	}

	h1 {
		font-size: var(--text-xl);
		font-weight: 700;
	}
</style>
