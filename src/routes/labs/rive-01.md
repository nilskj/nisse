---
layout: mds
title: "Getting started with Rive in Svelte"
---

# {title}

[Rive][1] is an online animation tool that can produce cool realtime graphics. It's kind of a mix between After Effects and Figma. 
In comparison to other similar tools like Lottie, it has an optimized [runtime][2] that runs on WebAssembly and animates .riv files.

## What can it do?
Rive has an impressive set of features. We can mix animations together, build state machines with transitions and inputs and even IK system and bones for animating even more complex stuff like characters.

I made a [video][3] showing how to set it up with Sveltekit but here is a short walkthrough.

Start by setting up a SvelteKit project and installing the rive-js package as per the [instructions on github][2]:
```shell
npm install rive-js
```
The examples in the documentation are actually built with having a script tag injected instead but since we already have a package manager and build setup let's use the npm package.

Instead of using the *rive* (lowercase) global window instance we import the named exports *Rive, Layout, Fit* etc from "rive-js"

In my use-case I export the rive instance as a prop so that I can use it to play / pause animations outside this component. This could have been handled in a store instead or in this component context module.
```html
<script>
	import { Alignment, Fit, Layout, Rive } from 'rive-js';
	import { onMount } from 'svelte';

	export let rive;

	let innerWidth, innerHeight;

	let canvas;

	onMount(async () => {
		rive = new Rive({
			src: '/dieter.riv',
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
```
Notice that the Rive animation file is a *.riv* file. This file is about 20kb. It is a quite large canvas 1440x770 and if we would have used Lottie it's JSON-file would probably be a lot bigger.

We use the `bind:this` directive to access the canvas element in order to render the animation to it. I also provide some resize logic using `svelte:window`

There are a lot of more features such as state machines and mixes in the rive js api to cover but this will at least get you started. Take care!
[1]: <https://rive.app> "Rive App"
[2]: <https://github.com/rive-app/rive-wasm> "Rive JS"
[3]: <https://www.youtube.com/watch?v=TDqFcJLYioY&t=333s> "Rive with Sveltekit - Video"
