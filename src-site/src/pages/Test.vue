<template lang="pug">
	div(class="layout")
			
		div(class="container view")
			
				
		footer
			div(class="text")
				p Copyright © 2019 by EienYuki.
			div(class="bg")
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