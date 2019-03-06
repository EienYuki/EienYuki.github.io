<template>
	<Layout>
		<div></div>
	</Layout>
</template>

<script>
export default {
		metaInfo: {
			title: 'Test',
			meta: []
		},
		mounted () {
			document.querySelector('nav ul a.test').classList.add('current')
		}
}
</script>