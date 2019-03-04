<template>
	<Layout>
		<div class="row">
			<template v-for="(item, index) in items">
				<div :key="index" class="col-md-3">
					<div class="item">
						<a :href="item.url" target="_blank" rel="noopener">
							<img :src="item.img" :alt="item.msg" />
							<p>{{item.text}}</p>
						</a>
						<p>{{item.msg}}</p>
					</div>
				</div>
			</template>
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
						img: '/img/small/Best Predict.jpg',
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