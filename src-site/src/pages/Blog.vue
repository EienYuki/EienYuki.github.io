<template>
	<Layout>
		<div class="row item">
			<g-link  class="col-lg-3 col-md-4" :to="{name: 'post', params:{slug: item.node.slug}}" v-for="(item, index) in $page.allPost.edges" :key="index">
				<img :src="require(`!!assets-loader!~/asstes/blog/${item.node.slug}/${item.node.image}`).src" :alt="item.node.title" />
				<h3 class="title">{{item.node.title}}</h3>
				<p class="msg">{{item.node.msg}}</p>
			</g-link>
		</div>
	</Layout>
</template>

<page-query>
query PostConnection {
  allPost {
    edges {
      node {
        slug
        title
		image
		msg
        content
      }
    }
  }
}
</page-query>

<script>
	import myMeta from '~/mixin/meta.js'

	export default {
		metaInfo: {
			title: 'Blog',
			meta: []
		},
		mixins: [myMeta],
		created () {
			this.$options.metaInfo.meta = [...this.$options.metaInfo.meta, ...this.generateMeta({
				title: 'Blog',
				description: '類似日記的東西？',
				image: require(`!!assets-loader!~/asstes/about/練習56-5.jpg`).src
			})]
		},
		mounted () {
			document.querySelector('nav ul a.blog').classList.add('current')
		}
}
</script>

