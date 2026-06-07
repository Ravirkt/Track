<script>
	import { onNavigate } from "$app/navigation";

	import favicon from "$lib/assets/favicon.svg";
	import "$lib/assets/css/global.css";

	import { LoginIcon } from "$lib";
	import Nav from "$lib/components/sections/Nav.svelte";

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

{@render children()}

<style>
  @media (prefers-reduced-motion: no-preference) {
    ::view-transition-old(root) {
      animation: fade-out 0.8s ease forwards;
    }
    ::view-transition-new(root) {
      animation: fade-in 0.8s ease forwards;
    }
  }

  @keyframes fade-out {
    0%   { filter: blur(0px);  opacity: 1; }
    100% { filter: blur(40px); opacity: 0; }
  }
  @keyframes fade-in {
    0%   { filter: blur(40px); opacity: 0; }
    100% { filter: blur(0px);  opacity: 1; }
  }
</style>