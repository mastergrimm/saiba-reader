<script lang="ts">
	import "$lib/styles/app.scss";

	import Header from "$lib/components/Header.svelte";
</script>

<div class="page">
	<Header />
	<slot />
</div>

<style lang="scss">
	.page {
		padding: var(--spacing-4) var(--spacing-6);

		@include flexbox(column, normal, normal, 1rem);
	}
</style>
