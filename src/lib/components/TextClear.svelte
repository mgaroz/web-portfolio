<script lang="ts">
	interface Props {
		text: string;
		href?: string;
		target?: string;
		rel?: string;
	}

	let { text, href = '/', target = '_self', rel = 'noreferrer' }: Props = $props();
</script>

<a
	{href}
	{target}
	{rel}
	data-after={text}
	class="text--effect-clear font-bgr text-[14px] uppercase"
>
	<span>{text}</span>
</a>
