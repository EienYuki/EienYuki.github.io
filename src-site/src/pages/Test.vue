<template lang="pug">
	div(class="layout")
		header(class="row header")
			div(class="box")
				div(class="title")
					h1 ゆきふわり
				div(class="icons")
					a(href="https://t.co/y4vEqPiXW9" target="_blank" rel="noopener")
						img(src="/icons/pixiv_icon.png", alt="pixiv_icon.png")
					a(href="https://twitter.com/yuki_01957" target="_blank" rel="noopener")
						img(src="/icons/Twitter_Logo_WhiteOnBlue.png", alt="GitHub-Mark-32px.png")
					a(href="https://github.com/EienYuki" target="_blank" rel="noopener")
						img(src="/icons/GitHub-Mark-Light-32px.png", alt="GitHub-Mark-32px.png")
			nav
				ul(class="container clearfix")
					li
						g-link(class="about" :to="{name: 'about'}") About
					li
						g-link(class="gallery" :to="{name: 'gallery'}") Gallery
					li
						g-link(class="project" :to="{name: 'project'}") Project
					li
						g-link(class="test" :to="{name: 'test'}") Test
			div(class="bg")
			
		div(class="container view")
			
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