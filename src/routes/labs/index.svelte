<script context='module'>
	export async function load({ fetch }) {
		const res = await fetch('/labs/labs.json');
		const { labs } = await res.json();
		return {
			props: { labs }
		};
	}
</script>

<script>
	export let labs;
</script>

<svelte:head>
	<title>Labs | NISSE.TECH</title>
</svelte:head>

<section class='max-w-2xl mx-auto text-gray-700 text-xl pb-20'>
	<h3 class='text-gray-400 text-xl my-2 mt-10 uppercase'>Labs</h3>
	<p>Labs are short entries of mine that I share. They could be some random rants, some code discovery or some cool
		experiments, enjoy!</p>
	<ul class='mt-8'>

		{#each labs as lab}
			<li class='font-bold underline'>
				<a href='/labs/{lab.slug}'>
					{lab.title}
				</a>
			</li>
		{/each}
	</ul>

</section>