<script>
	import { onDestroy, onMount } from "svelte";

	/*	let solo = '00000000';
	let interval;
	onMount(() => {
		interval = setInterval(() => {
			solo = solo
				.split('')
				.map((x) => (Math.random() > 0.5 ? x : x === '1' ? '0' : '1'))
				.join('');
		}, 1000);
	});
	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});*/
</script>

<style>
	a,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		text-decoration: underline;
	}
	.contact-list {
			display: flex;
		padding-top: 20vh;
	}
	main {
		max-width: 450px;
		margin: 10vh auto;
		padding-inline: 1rem;
	}
	.logo {
		padding: 0;
		margin: 0;
		transform-origin: top left;
	}
	.stripes {
		font-weight: 900;

		background: linear-gradient(
			-45deg,
			var(--stripe-1) 25%,
			var(--stripe-2) 25%,
			var(--stripe-2) 50%,
			var(--stripe-1) 50%,
			var(--stripe-1) 75%,
			var(--stripe-2) 75%,
			var(--stripe-2)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: var(--size) var(--size);
		background-position: 0 0;
		animation: stripes 1.4s linear infinite;
	}

	@keyframes stripes {
		100% {
			background-position: var(--size) 0, var(--size) 0, var(--size) 0;
		}
	}
</style>

<main>
	<svg
		class="logo"
		width="46"
		height="88"
		viewBox="0 0 46 88"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M30.4545 3.09091V38H22.5455L9.93182 19.6591H9.72727V38H0.25V3.09091H8.29545L20.7045 21.3636H20.9773V3.09091H30.4545ZM36.5139 38V11.8182H45.923V38H36.5139ZM41.2184 9.09091C39.9457 9.09091 38.8548 8.67045 37.9457 7.82955C37.0366 6.98864 36.582 5.97727 36.582 4.79545C36.582 3.61364 37.0366 2.60227 37.9457 1.76136C38.8548 0.920454 39.9457 0.5 41.2184 0.5C42.5025 0.5 43.5934 0.920454 44.4911 1.76136C45.4002 2.60227 45.8548 3.61364 45.8548 4.79545C45.8548 5.97727 45.4002 6.98864 44.4911 7.82955C43.5934 8.67045 42.5025 9.09091 41.2184 9.09091ZM0.25 78V43.0909H9.72727V57.2045H10.2045L20.7045 43.0909H31.75L19.9545 58.6364L32.0227 78H20.7045L12.8636 64.9091L9.72727 69V78H0.25ZM36.1389 51.8182H45.548V78.8864C45.548 81.1818 45.065 82.9773 44.0991 84.2727C43.1445 85.5682 41.8036 86.483 40.0764 87.017C38.3491 87.5511 36.332 87.8182 34.0252 87.8182C33.6843 87.8182 33.3718 87.8125 33.0877 87.8011C32.7923 87.7898 32.4684 87.7727 32.1161 87.75V80.7955C32.3434 80.8182 32.5423 80.8352 32.7127 80.8466C32.8718 80.858 33.0366 80.8636 33.207 80.8636C34.332 80.8636 35.0991 80.6875 35.5082 80.3352C35.9286 79.9943 36.1389 79.4432 36.1389 78.6818V51.8182ZM40.8434 49.0909C39.5707 49.0909 38.4798 48.6705 37.5707 47.8295C36.6616 46.9886 36.207 45.9773 36.207 44.7955C36.207 43.6136 36.6616 42.6023 37.5707 41.7614C38.4798 40.9205 39.5707 40.5 40.8434 40.5C42.1275 40.5 43.2184 40.9205 44.1161 41.7614C45.0252 42.6023 45.4798 43.6136 45.4798 44.7955C45.4798 45.9773 45.0252 46.9886 44.1161 47.8295C43.2184 48.6705 42.1275 49.0909 40.8434 49.0909Z"
			fill="black" />
	</svg>
	<p class="inter-30">
		Hey! <strong class="stripes">👋</strong> I'm Nils, a full-stack typescripter and interaction designer
		based in Sweden.
	</p>

	<p class="inter-30">I currently work at Queenslab, assigned at Volvo Cars.</p>
	<p class="inter-30">
		<strong class="stripes"> 🪄 ✨</strong>
	</p>

	<p>
		Good design is good business and a good user experience is key for a successful product. I've
		worked through the whole tech stack, from UX design and animation joints to backend development
		and table joins.
	</p>

	<p>
		Previous work: SMSPark, Picadeli, Flowbird, Lumen Radio, CEVT, Lync&Co, Stena Line, Osstell
		<strong class="stripes">🏗</strong>
	</p>

	<!--	<aside>
		I bet you expect more here, and there might be soonish. Untill then let me present, <strong
			>binary solo! {solo}</strong
		>
	</aside>-->
	<dl class="contact-list">
		<dd><a href="mailto:nilskjellman@gmail.com">mail it</a></dd>
		<dd><a href="https://www.linkedin.com/in/nils-kjellman-abb8b935/">work it</a></dd>
		<dd><a href="https://twitter.com/nils_kjellman">shout it</a></dd>
	</dl>
</main>
