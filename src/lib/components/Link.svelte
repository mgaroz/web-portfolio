<script lang="ts">
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: number;
</script>

<a {href} class="block overflow-hidden uppercase">
	<span
		class="slide-up group-hover:-top-[22px] text-[{textSize}] transition-[top] duration-{duration}"
		data-hover={content}>{content}</span
	>
</a>

<style>
	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
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
</style>
