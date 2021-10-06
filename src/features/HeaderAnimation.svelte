<script>
	import { Alignment, Fit, Layout, Rive } from 'rive-js';
	import { onMount } from 'svelte';

	export let rive;

	let innerWidth, innerHeight;

	let canvas;

	onMount(async () => {
		rive = new Rive({
			src: '/dieter2.riv',
			canvas: canvas,
			layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center })
		});
		rive.play(['Intro']);
	});

	$: if (innerWidth || innerHeight) {
		rive.layout = new Layout({ fit: Fit.Contain, alignment: Alignment.Center });
		rive.play('Hover');
	}

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<canvas width={innerWidth} height={400} bind:this={canvas}></canvas>
