<template lang="pug">
	Layout
		div(class="row")
			div(class="col-md-3 info-box")
				g-image(:src="require(`!!assets-loader!~/asstes/about/練習56-5.jpg`)" alt="大頭貼")
				h1 ゆきふわり
				h2 midorin452@gmail.com
				p 對未來感到迷惘 啊啊啊～
			div(class="col-md-9 box text")
				p 啊不知道要打什麼 ((被打
				br
				br
				br
				p 總之先來個 推坑清單？

				div(class="row item item-badge")
					a(class="col-sm-4 box" v-for="(item, index) in items" :key="index" :href="item.url" target="_blank" rel="noopener")
						div(class="row")
							div(class="col-4 left")
								div(class="img")
									img(:src="item.img" :alt="item.text")
							div(class="col-8 right")
								p {{item.text}}
								p(class="msg") {{item.msg}}
</template>


<script>
	import myMeta from '~/mixin/meta.js'

	export default {
		metaInfo: {
			title: '關於我',
			meta: []
		},
		mixins: [myMeta],
		data () {
			return {
				items: [
					{text: 'Vue', msg: '沒有他怎麼寫網頁', img: 'https://vuejs.org/images/logo.png', url: 'https://vuejs.org/'},
					{text: 'Bootstrap', msg: '沒有他怎麼切版', img: 'https://seeklogo.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg', url: 'https://bootstrap.hexschool.com/'},
					{text: 'Gridsome', msg: 'SEO的救星', img: 'https://raw.githubusercontent.com/gridsome/gridsome/master/assets/logo.png', url: 'https://gridsome.org/'},
					{text: 'RouterOS', msg: '強大的窮人路由器！', img: 'https://designs.mikrotik.com/images/large/mikrotik.png', url: 'https://mikrotik.com/software'},
					{text: 'XROUND', msg: '看動畫超有感', img: 'https://res.cloudinary.com/cakeresume/image/upload/s--udQPV91i--/c_pad,fl_png8,h_400,w_400/v1491979865/q3yft0dzmsnykqiaac2z.png', url: 'https://www.xround.co/'},
					{text: 'Clip Studio Paint', msg: '太多好用的工具惹', img: 'https://www.macupdate.com/images/icons256/32454.png', url: 'https://www.clipstudio.net/'},
					{text: 'NextCloud', msg: '強大的檔案分享系統！', img: 'https://nextcloud.com/wp-content/themes/next/assets/img/common/nextcloud-square-logo.png?x38529', url: 'https://nextcloud.com/'},
					{text: 'CloudFlare', msg: '好用的CDN服務', img: 'https://www.cloudflare.com/img/cf-facebook-card.png', url: 'https://www.cloudflare.com/'},
					{text: 'Proxmox VE', msg: '超好用的虛擬機系統', img: 'https://www.unixsamurai.com/wp-content/uploads/2018/06/proxmox-logo.png', url: 'https://www.proxmox.com/'},
					
				]
			}
		},
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
	
	.info-box {
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
