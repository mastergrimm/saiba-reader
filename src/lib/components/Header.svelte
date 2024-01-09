<script lang="ts">
	import Icon from "@iconify/svelte";
	import { columns, readingmode, theme } from "$lib/store";
	import Modal from "$lib/components/Modal.svelte";
	import Logo from "$lib/assets/logo.png";

	let showSettings: boolean = false;

	$: {
		columns.set($columns);
		readingmode.set($readingmode);
		theme.set($theme);
	}
</script>

<header>
	<div class="">
		<h1>
			<a href="/">
				<img src={Logo} alt="Saiba Manga & Comic Reader" /><span
					>Saiba Reader</span
				></a
			>
		</h1>
	</div>
	<div class="options">
		<button class="settings" on:click={() => (showSettings = true)}>
			<Icon
				icon="material-symbols-light:settings"
				width="32"
				height="32"
			/>
		</button>
	</div>
</header>

{#if showSettings}
	<Modal bind:show={showSettings}>
		<div class="settings__title">Settings</div>
		<form class="settings">
			<div class="settings__item">
				<div class="settings__name">Reading Mode</div>
				<div class="settings__group">
					<div class="settings__option">
						<input
							type="radio"
							name="readingmode"
							id="continuous"
							value="continuous"
							bind:group={$readingmode}
						/>
						<label for="continuous">Continuous</label>
					</div>
					<div class="settings__option">
						<input
							type="radio"
							name="readingmode"
							id="page-by-page"
							value="page-by-page"
							bind:group={$readingmode}
						/>
						<label for="page-by-page">Page by Page</label>
					</div>
				</div>
			</div>
			<div class="settings__item">
				<div class="settings__name">Columns</div>
				<div class="settings__group">
					<div class="settings__option">
						<input
							type="radio"
							name="columns"
							id="single"
							value="single"
							bind:group={$columns}
						/>
						<label for="single">Single</label>
					</div>
					<div class="settings__option">
						<input
							type="radio"
							name="columns"
							id="double"
							value="double"
							bind:group={$columns}
						/>
						<label for="double">Double</label>
					</div>
				</div>
			</div>
			<div class="settings__item">
				<div class="settings__name">Theme</div>
				<div class="settings__group">
					<div class="settings__option">
						<input
							type="radio"
							name="theme"
							id="light"
							value="light"
							bind:group={$theme}
						/>
						<label for="light">Light</label>
					</div>
					<div class="settings__option">
						<input
							type="radio"
							name="theme"
							id="dark"
							value="dark"
							bind:group={$theme}
						/>
						<label for="dark">Dark</label>
					</div>
				</div>
				<div class="settings__footer">
					<button
						class="settings__close"
						on:click={() => (showSettings = false)}>Close</button
					>
				</div>
			</div>
		</form></Modal
	>
{/if}

<style lang="scss">
	header {
		@include flexbox(row, center, space-between, 1rem);

		padding: 0 0 var(--spacing-1) 0;
	}

	h1 {
		font-size: var(--text-xl);
		font-weight: 700;

		a {
			@include flexbox(row, center, normal, 1rem);

			img {
				height: 64px;
				margin-right: var(--spacing-quarter);
			}

			span {
				@include tablet {
					display: none;
				}
			}
		}
	}

	.options {
		@include flexbox(row, center, normal, 1rem);
	}

	.settings__title {
		font-size: var(--text-2xl);
		font-weight: 700;
		text-align: center;
		margin: 0 0 var(--spacing-1) 0;
	}

	.settings {
		@include flexbox(column, normal, normal, 1rem);
	}

	.settings__item {
	}

	.settings__name {
		font-size: var(--text-md);
		font-weight: 700;

		margin: 0 0 var(--spacing-quarter) 0;
	}

	.settings__group {
		@include flexbox(row, center, normal, 1rem);
	}

	.settings__option {
		label {
			user-select: none;
		}
	}

	.settings__footer {
		@include flexbox(row, center, center, 1rem);
	}

	.settings__close {
		margin-top: var(--spacing-1);
		background-color: var(--clr-accent);
		color: var(--clr-bg);
		padding: var(--spacing-half) var(--spacing-1);
		border-radius: var(--rounded-md);
	}
</style>
