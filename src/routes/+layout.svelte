<script>
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
</script>

<header>
	<nav class="flex h-32 w-full items-center justify-between py-5 px-20">
		<div class="logo">LOGO</div>
		<div class="menu">
			<ul class="flex list-none">
				<li class="inline-block py-5 px-[30px]">
					<Link href="/" content="Home" />
				</li>
				<li class="inline-block py-5 px-[30px]">
					<Link href="#work" content="Work" />
				</li>
				<li class="inline-block py-5 px-[30px]">
					<Link href="#about" content="About" />
				</li>
				<li class="inline-block py-5 px-[30px]">
					<!-- <a href="#contact" class="text-[14px] uppercase ">Contact</a> -->
					<Link href="#contact" content="Contact" />
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />
