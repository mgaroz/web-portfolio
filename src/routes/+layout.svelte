<script>
	import '../app.css';
</script>

<header>
	<nav class="flex items-center justify-between py-5 w-full px-20 h-32">
		<div class="logo">LOGO</div>
		<div class="menu">
			<ul class="list-none flex">
				<li class="inline-block py-5 px-[30px]">
					<a href="/" class="text-[14px] uppercase ">Home</a>
				</li>
				<li class="inline-block py-5 px-[30px]">
					<a href="#work" class="text-[14px] uppercase ">Work</a>
				</li>
				<li class="inline-block py-5 px-[30px]">
					<a href="#about" class="text-[14px] uppercase ">About</a>
				</li>
				<li class="inline-block py-5 px-[30px]">
					<a href="#contact" class="text-[14px] uppercase ">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />
