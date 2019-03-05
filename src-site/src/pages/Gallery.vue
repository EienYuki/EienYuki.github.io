<template>
	<Layout>
		<div class="row item" id="lightgallery">
			<a class="col-md-3" v-for="(item, index) in items" :key="index" :href="require(`!!assets-loader!~/asstes/${item.img}`).src">
				<g-image :src="require(`!!assets-loader!~/asstes/${item.img}`)" :alt="item.text" />
				<p>{{item.text}}</p>
			</a>
		</div>
	</Layout>
</template>

<script>
	import mIightgallery from '~/mixin/mIightgallery.js'

	export default {
		metaInfo: {
			title: '我的畫',
			meta: [
				{ key: 'description', name: 'description', content: `一些我畫的圖` }
			]
		},
		mixins: [mIightgallery],
		data () {
			return {
				items: [
					{
						img: 'gallery/練習56-5-out.png',
						text: '柚ちゃん'
					},
					{
						img: 'gallery/練習73-4-out.png',
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
