<script>import '../app.scss';
</script>

<header class='leading-relaxed tracking-widest uppercase mx-auto max-w-sm text-center mt-8'>
	<nav>
		<a href='/'>
		<h1 class='text-3xl text-gray-800'>nisse.tech</h1>
		<h2 class='text-base text-gray-600'>Nils Kjellman - frontend developer, designer and mentor</h2>
		</a>
		<ul class='flex mx-auto justify-center gap-10 mt-4 text-gray-800 font-bold'>
			<li>
				<a href='/labs'>
					Labs
				</a>
			</li>
			<li>
				<a href='https://calendly.com/nilskjellman/frontend-mentorship-session?month=2022-01&back=1'>
					Book me
				</a>
			</li>
			<li>
				<a href='/contact'>
					Contact
				</a>
			</li>
		</ul>
	</nav>
</header>
<main class='p-4'>
	<slot>

	</slot>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');
	body {
		font-family: 'Fira Sans', sans-serif;
	}
</style>