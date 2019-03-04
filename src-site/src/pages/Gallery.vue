<template>
	<Layout>
		<div class="row item" id="lightgallery">
			<a class="col-md-3" v-for="(item, index) in items" :key="index" :href="item.small">
      			<img :src="item.raw" />
				<p>{{item.text}}</p>
			</a>
		</div>
	</Layout>
</template>

<script>
	import mIightgallery from '~/mixin/mIightgallery.js'

	export default {
		metaInfo: {
			title: '我的畫'
		},
		mixins: [mIightgallery],
		data () {
			return {
				items: [
					{
						small: '/img/small/!練習56-5-out.jpg',
						raw: '/img/raw/練習56-5-out.png',
						text: '柚ちゃん'
					},
					{
						small: '/img/small/!練習73-4-out.jpg',
						raw: '/img/raw/練習73-4-out.png',
						text: 'マキア'
					}
				]
			}
		},
		methods: {
			
		},
		mounted () {
			document.querySelector('nav ul a.gallery').classList.add('current')
		}
	}
</script>

<style lang="scss">
	@import '~lightgallery.js/dist/css/lightgallery.min.css';
</style>
