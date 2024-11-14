<script lang="ts">
	interface Props {
		text: string;
		href?: string;
		target?: string;
		rel?: string;
	}

	let {
		text,
		href = '/',
		target = '_self',
		rel = 'noreferrer'
	}: Props = $props();
</script>

<a {href} {target} {rel} data-after={text} class="text--effect-clear font-bgr text-[14px] uppercase">
	<span>{text}</span>
</a>

<!-- <style>
	.clear-text {
		position: relative;
		padding: 0;
		overflow: hidden;
		transition: transform 0.2s;
		display: block;
	}

	.clear-text::after {
		content: attr(data-after);
		display: inline-block;
		transform: translateY(100%);
		position: absolute;
		left: 0;
		transition: inherit;
	}

	.clear-text > span {
		display: inline-block;
		transform: translateY(0%);
		transition: inherit;
	}

	.clear-text:hover > span {
		transform: translateY(-100%);
	}

	.clear-text:hover::after {
		transform: translateY(0%);
	}
</style> -->
