<script lang="ts">
	let menuData = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Portfolio',
			link: '#portfolio'
		},
		{
			name: 'About',
			link: '#about'
		},
		{
			name: 'Blog',
			link: '#blog'
		},
		{
			name: 'Contact',
			link: '#contact'
		}
	];

	export let isMobileMenuActive: boolean;

	function toggleMobileMenu() {
		isMobileMenuActive = !isMobileMenuActive;
		console.log(isMobileMenuActive);
	}
</script>

<div
	class="2xs:w-full 2xs:h-full 2xs:px-6 bg-cod-gray-500 font-bgm text-2xl uppercase md:hidden"
	id="mobile-nav"
>
	<ul class="flex h-full flex-col justify-center gap-8">
		{#each menuData as { name, link }}
			<li>
				<a href={link} on:click={() => console.log('clicked!')}>{name}</a>
			</li>
		{/each}
	</ul>
</div>
