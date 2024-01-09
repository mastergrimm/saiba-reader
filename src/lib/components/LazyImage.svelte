<script lang="ts">
	import { onMount } from "svelte";

	export let src = "";
	export let alt = "";

	let img: any;
	let observer: any;

	onMount(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					img.src = src;
					observer.unobserve(img);
				}
			});
		});

		observer.observe(img);
	});
</script>

<img bind:this={img} {alt} />
