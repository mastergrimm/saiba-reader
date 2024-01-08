<script lang="ts">
	import Icon from "@iconify/svelte";

	import Modal from "$lib/components/Modal.svelte";

	let showSettings: boolean = false;
</script>

<header>
	<div class="">
		<h1>
			<a href="/">Saiba Manga & Comic Reader</a>
		</h1>
	</div>
	<div class="options">
		<button class="settings" on:click={() => (showSettings = true)}>
			<Icon icon="material-symbols:settings" width="32" height="32" />
		</button>
	</div>
</header>

{#if showSettings}
	<Modal bind:show={showSettings}>
		<h1>Settings</h1>
	</Modal>
{/if}

<style lang="scss">
	header {
		@include flexbox(row, center, space-between, 1rem);

		padding: 0 0 var(--spacing-1) 0;
	}

	h1 {
		font-size: var(--text-xl);
		font-weight: 700;
	}

	.options {
		@include flexbox(row, center, normal, 1rem);
	}
</style>
