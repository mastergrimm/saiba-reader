<script lang="ts">
	import type { PageData } from "../$types";

	export let data: PageData;
</script>

<div class="page">
	<div class="reader">
		<div class="info">
			<div class="info__title">{data}</div>
			<div class="info__chapter">
				<span>#1</span> Preview Chapter name
			</div>
		</div>
		<!-- <div class="preview">
			{#each previewImages as image}
				<div class="preview__panel">
					<img src={image} alt="Preview" />
				</div>
			{/each}
		</div> -->
	</div>
</div>

<style lang="scss">
	.page {
		margin: var(--spacing-6);

		@include flexbox(column, center, center, 1rem);
	}

	.reader {
		@include flexbox(column, normal, normal, 1rem);

		max-width: 840px;
	}

	.preview {
		@include flexbox(column, center, center, 1rem);
	}

	.info {
		.info__title {
			font-size: var(--text-2xl);
			font-weight: 700;
		}

		.info__chapter {
			font-size: var(--text-lg);
			font-weight: 400;

			span {
				color: var(--clr-accent);
			}
		}
	}
</style>
