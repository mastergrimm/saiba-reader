<script lang="ts">
	import Icon from "@iconify/svelte";
	import { clickOutside } from "$lib/utils/clickOutside";
	import { search } from "$lib/store";
	export let open: boolean = false;
</script>

<button
	class="search"
	class:selected={open === true}
	on:click={() => (open = true)}
	use:clickOutside={() => (open = false)}
>
	<div class="search__icon">
		<Icon icon="ri:search-line" width="32" height="32" />
	</div>
	<input
		class="search__input"
		placeholder="Search for your manga title"
		type="text"
		bind:value={$search}
	/>
</button>

<style lang="scss">
	.search {
		@include flexbox(row, center, normal, 0rem);
		background-color: rgba(var(--clr-cards), 0.4);
		width: 320px;

		transition: all 0.2s ease;

		flex: 1;
		border-radius: var(--rounded-md);

		@include tablet {
			width: 100%;
		}

		.search__input {
			width: 100%;
			background-color: transparent;
			letter-spacing: 0.02em;
			padding: var(--spacing-1) var(--spacing-1) var(--spacing-1) 0;
			outline: none;
		}

		.search__input::placeholder {
			color: var(--clr-text);
			opacity: 0.7;
			font-weight: 300;
		}

		.search__icon {
			padding: var(--spacing-1);
		}
	}

	.selected {
		width: 100%;
		background-color: rgba(var(--clr-cards), 0.6);
	}
</style>
