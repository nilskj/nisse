<script>
	export let title;
</script>

<svelte:head>
	<title>NISSE.TECH - {title}</title>
</svelte:head>

<section class='prose mx-auto'>
	<hr />
	<slot />
</section>