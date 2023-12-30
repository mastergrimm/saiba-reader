<script lang="ts">
	export let search: string = "";
</script>

<div class="search">
	<input
		placeholder="Search for your manga title"
		type="text"
		bind:value={search}
	/>
</div>

<style lang="scss">
	.search {
		background-color: rgba(var(--clr-cards), 0.4);
		box-shadow: inset 0 0 10px rgba(var(--clr-shadow), 0.1);
		flex: 1;

		input {
			width: 100%;
			background-color: transparent;
			padding: var(--spacing-1);
			letter-spacing: 0.02em;
		}

		input::placeholder {
			color: var(--clr-text);
			opacity: 0.7;
			font-weight: 300;
		}
	}
</style>
