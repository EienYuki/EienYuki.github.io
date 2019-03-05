<template lang="pug">
	Layout
		div(class="row")
			div(class="col-md-3 box img")
				g-image(:src="require(`!!assets-loader!~/asstes/about/練習56-5.jpg`)" alt="大頭貼")
				h1 ゆきふわり
				h2 midorin452@gmail.com
				p 對未來感到迷惘 啊啊啊～
			div(class="col-md-9 box text")
				p 啊不知道要打什麼 ((被打
</template>


<script>
	import myMeta from '~/mixin/meta.js'

	export default {
		metaInfo: {
			title: '關於我',
			meta: []
		},
		mixins: [myMeta],
		created () {
			this.$options.metaInfo.meta = [...this.$options.metaInfo.meta, ...this.generateMeta({
				title: '關於我',
				description: '我的自我介紹 現在不知道要打什麼 ((被打',
				image: require(`!!assets-loader!~/asstes/about/練習56-5.jpg`).src
			})]
		},
		mounted () {
			document.querySelector('nav ul a.about').classList.add('current')
		}
}
</script>

<style lang="scss" scoped>
	@import '../scss/color.scss';
	
	.img {
		width: 70%;
		margin: 0 auto 3% auto;
		text-align: center;
		img {
			width: 80%;
			margin: 5%;
			border-radius: 100%;
			border: 3px solid $color_line;
		}
		h1, h2 {
			font-size: 1.2rem;
			margin-top: 1.5vh;
		}
	}
	.text {
		text-align: center;
		margin-top: 2vw;
	}
</style>
