<script lang="ts">
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: string;
	export let displacement: string;
</script>

<a {href} class="block overflow-hidden uppercase">
	<span
		class="slide-up transition-[top] {displacement
			? `group-hover:-top-[${displacement}]`
			: 'group-hover:-top-[22px]'}"
		data-hover={content}
		style="--textSize:{textSize}; --duration:{duration};">{content}</span
	>
</a>

<style>
	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
		font-size: var(--textSize);
		transition-duration: var(--duration);
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
