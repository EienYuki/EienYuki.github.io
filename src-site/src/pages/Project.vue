<template>
	<Layout>
		<div class="row item">
			<a class="col-md-3" v-for="(item, index) in items" :key="index" :href="item.url" target="_blank" rel="noopener">
				<g-image :src="require(`!!assets-loader!~/asstes/${item.img}`)" blur="200" :alt="item.msg" />
				<p>{{item.text}}</p>
				<p class="msg">{{item.msg}}</p>
			</a>
		</div>
	</Layout>
</template>

<script>

	export default {
		metaInfo: {
			title: '我的專案',
			meta: [
				{ key: 'description', name: 'description', content: `一些我參與過的專案` }
			]
		},
		data () {
			return {
				items: [
					{
						img: 'project/Best_Predict.jpg',
						url: 'https://http-172-17-11-0-3000.itsrv.work/home',
						text: 'Best Predict',
						msg: '這是學校的畢業專題 一共有5人'
					}
				]
			}
		},
		methods: {
			
		},
		mounted () {
			document.querySelector('nav ul a.project').classList.add('current')
		}
	}
</script>