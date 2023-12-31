<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<header>
	<div class="">
		<h1>
			<a href="/">Saiba Manga & Comic Reader</a>
		</h1>
	</div>
	<div class="options">
		<button class="settings">
			<Icon icon="ri:settings-3-line" width="32" height="32" />
		</button>
		<button class="upload">Upload</button>
	</div>
</header>

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

		.upload {
			padding: var(--spacing-1);

			background-color: var(--clr-accent);
			color: var(--clr-bg);
		}
	}
</style>
