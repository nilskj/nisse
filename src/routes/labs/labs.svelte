<script>
	export let title;
</script>

<svelte:head>
	<title>NISSE.TECH - {title}</title>
</svelte:head>

<section class='prose mx-auto'>
	<slot />
	<hr />
	<span class='text-gray-500 uppercase m-0 font-bold'>All labs</span>
</section>