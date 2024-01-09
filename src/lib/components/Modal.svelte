<script>
	import { clickOutside } from "$lib/utils/clickOutside";
	import { quintOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";

	export let show = false;

	const toggleModal = () => {
		show = false;
	};
</script>

{#if show}
	<div class="modal__wrapper" transition:fade|global={{ duration: 100 }}>
		<div
			class="modal"
			use:clickOutside={toggleModal}
			transition:fly|global={{
				duration: 300,
				y: 500,
				opacity: 0.5,
				easing: quintOut,
			}}
		>
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal__wrapper {
		background-color: rgba(var(--clr-bg-shade), 0.8);
		backdrop-filter: blur(2px);

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		width: 100%;
		height: 100%;

		@include flexbox(row, center, center, 1rem);

		z-index: 200;
	}

	.modal {
		background-color: rgba(var(--clr-cards), 1);

		z-index: 300;
		padding: var(--spacing-2);
		border-radius: var(--rounded-md);
	}
</style>
