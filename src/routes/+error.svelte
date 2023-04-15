<script lang="ts">
	import { page } from '$app/stores';
</script>

<section id="error" class="error 2xs:px-5 pt-32 md:px-20">
	<div class="flex h-full flex-col items-start justify-center">
		<h1>{$page.status}:</h1>
		<h2>{$page.error?.message}</h2>
	</div>
</section>

<style>
	.error {
		height: 100vh;
	}
</style>
