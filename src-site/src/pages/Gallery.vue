<template>
	<Layout>
		<div class="row item lightgallery">
			<a v-for="(item, index) in items" class="col-lg-3 col-md-4" :key="index" :href="require(`!!assets-loader!~/asstes/${item.img}`).src">
				<g-image :src="require(`!!assets-loader!~/asstes/${item.img}`)" blur="200" :alt="item.text" />
				<h3 class="title">{{item.text}}</h3>
				<p class="msg" v-if="item.msg">{{item.msg}}</p>
			</a>
		</div>
	</Layout>
</template>

<script>
	import myMeta from '~/mixin/meta.js'
	import mIightgallery from '~/mixin/mIightgallery.js'

	export default {
		metaInfo: {
			title: '我的畫',
			meta: []
		},
		mixins: [myMeta, mIightgallery],
		data () {
			return {
				items: [
					{
						img: 'gallery/練習56-5-out.png',
						text: '柚ちゃん',
						msg: '第一次PO的圖'
					},
					{
						img: 'gallery/練習73-4-out.png',
						text: 'マキア',
						msg: '我一定要找個時間來重畫...'
					},
					{
						img: 'gallery/練習75-3.10.png',
						text: '森林中的少女?'
					},
					{
						img: 'gallery/練習84.13.png',
						text: '2019 新年賀圖'
					},
					{
						img: 'gallery/練習88.5.png',
						text: '無題',
						msg: '啊我不會畫狗QQ'
					}
				]
			}
		},
		created () {
			this.$options.metaInfo.meta = [...this.$options.metaInfo.meta, ...this.generateMeta({
				title: '我的畫',
				description: '一些我畫的圖',
				image: require(`!!assets-loader!~/asstes/about/練習56-5.jpg`).src
			})]
		},
		mounted () {
			document.querySelector('nav ul a.gallery').classList.add('current')
		}
	}
</script>

<style lang="scss">
	@import '~lightgallery.js/dist/css/lightgallery.min.css';
</style>
