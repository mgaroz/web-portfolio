<script lang="ts">
	import { isMobileMenuActive } from '$lib/store';
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
</script>

<div
	class="2xs:w-full 2xs:h-full 2xs:px-6 bg-cod-gray-500 font-bgm text-2xl uppercase md:hidden"
	id="mobile-nav"
>
	<ul class="flex h-full flex-col justify-center gap-8">
		{#each menuData as { name, link }}
			<li>
				<a href={link} on:click={() => ($isMobileMenuActive = !$isMobileMenuActive)} class="block"
					>{name}</a
				>
			</li>
		{/each}
	</ul>
</div>
