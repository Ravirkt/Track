<script>
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/assets/css/global.css";

	    import { LoginIcon, } from "$lib";
    import Nav from '$lib/components/sections/Nav.svelte';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav/>

{@render children()}
