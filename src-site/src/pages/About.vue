<template lang="pug">
	Layout
		div(class="row")
			div(class="col-md-3 box img")
				img(src="/img/!練習56-5.jpg" alt="")
				h1 永遠ゆき
				h2 midorin452@gmail.com
			div(class="col-md-9 box text")
				p
					| 冬は寒いけど
					br
					| でも家にいるなら、温かいを感じられる
					br
					| 私はそれが好き
</template>


<script>
export default {
	metaInfo: {
		title: '關於我'
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
		margin: 0 auto;
		img {
			width: 80%;
			margin: 5% 0% 5% 10%;
			border-radius: 100%;
			border: 3px solid $color_line;
		}
		h1, h2 {
			font-size: 1.2rem;
			margin-top: 1.5vh;
			text-align: center;
		}
	}
	.text {
		text-align: center;
		margin-top: 2vw;
	}
</style>
