<script>
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
</script>

<header>
	<nav class="flex h-32 w-full items-center justify-between py-5 px-20">
		<div class="logo">LOGO</div>
		<div class="menu">
			<ul class="flex list-none">
				<li class="group inline-block py-5 px-[30px]">
					<Link href="/" content="Home" textSize="14px" />
				</li>
				<li class="group inline-block py-5 px-[30px]">
					<Link href="#work" content="Work" textSize="14px" />
				</li>
				<li class="group inline-block py-5 px-[30px]">
					<Link href="#about" content="About" textSize="14px" />
				</li>
				<li class="group inline-block py-5 px-[30px]">
					<Link href="#contact" content="Contact" textSize="14px" />
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />
