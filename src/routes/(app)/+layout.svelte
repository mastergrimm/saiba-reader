<script lang="ts">
	import "$lib/styles/app.scss";
	import { theme } from "$lib/store";
	import { browser } from "$app/environment";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	$: {
		if (browser) {
			switch ($theme) {
				case "dark":
					document.documentElement.classList.add("dark");
					document.documentElement.classList.remove("light");
					break;
				case "light":
					document.documentElement.classList.remove("dark");
					document.documentElement.classList.add("light");
					break;
				default:
					break;
			}
		}
	}
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

		@include tablet {
			padding: var(--spacing-2) var(--spacing-2);
		}
	}

	main {
		flex: 1;
	}
</style>
