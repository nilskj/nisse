<script>
	import { Alignment, Fit, Layout, Rive } from 'rive-js';
	import { onMount } from 'svelte';

	export let rive;

	let innerWidth, innerHeight;

	let canvas;
	const ratio = 770/1440;

	onMount(async () => {
		rive = new Rive({
			src: '/dieter2.riv',
			canvas: canvas,
			layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center })
		});
		rive.play(['Intro']);
	});

	$: if (innerWidth || innerHeight) {
		rive.layout = new Layout({ fit: Fit.Cover, alignment: Alignment.Center });
		rive.play('Hover');
	}

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id='rive-container' class='w-full'>
	<canvas width={innerWidth*2} height={innerWidth*2 * ratio} bind:this={canvas}></canvas>
</div>

<style lang='postcss'>
	canvas {
			position:relative;
			left: 50%;
			transform: scale(0.5) translateX(-50%);
			transform-origin: 0 0;
			width: 200%;
	}
	#rive-container {
			overflow: hidden;
			position: relative;
			top: 0;
			max-height: 60vw;
	}
  @media (min-width: 768px) {
	  canvas {
		  width: min(100%, 1440px);
	  }
	  #rive-container {
	    max-height: min(30vw,400px);
	  }
	}

</style>