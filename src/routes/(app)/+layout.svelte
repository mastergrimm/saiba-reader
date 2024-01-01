<script lang="ts">
	import "$lib/styles/app.scss";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="page">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.page {
		padding: var(--spacing-4) var(--spacing-6);

		@include flexbox(column, normal, normal, 1rem);
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
