<div class="footer__wrapper">
	<footer>
		<a href="https://www.saiba.digital" target="_blank"
			>Website made by Saiba Digital</a
		>
	</footer>
</div>

<style lang="scss">
	.footer__wrapper {
		@include flexbox(row, center, center, 1em);
		width: 100%;
		height: 100%;
		background-color: var(--clr-cards);
		padding: var(--spacing-1);
		footer {
			a {
				color: var(--clr-text);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
