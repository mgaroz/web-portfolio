<script lang="ts">
	export let text: string;
	export let href = '/';
	export let target = '_self';
	export let rel = 'noreferrer';
</script>

<a {href} {target} {rel} data-after={text} class="clear-text font-bgr text-[14px] uppercase">
	<span>{text}</span>
</a>

<style>
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
</style>
