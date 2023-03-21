<script lang="ts">
	export let href: string;
	export let content: string | number;
	export let textSize: string;
</script>

<a {href} class="block overflow-hidden uppercase">
	<span class="slide-up text-[{textSize}]" data-hover={content}>{content}</span>
</a>

<style>
	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
		transition: top 0.2s;
		overflow: hidden;
	}

	.slide-up::before {
		position: absolute;
		width: auto;
		top: 100%;
		left: 0;
		content: attr(data-hover);
	}

	.slide-up::after {
		clear: both;
		content: ' ';
		display: block;
		height: 0;
		visibility: hidden;
	}

	.slide-up:hover {
		top: -20px;
	}
</style>
