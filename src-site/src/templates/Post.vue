<template lang="pug">
	layout(class="blog_layout")
		div(class="blog_box")
			div(class="blog_image")
				img(:src="$page.post.image")
			div(class="blog_title")
				h1
					span {{$page.post.title}}
			
			div(class="blog_content" v-html="$page.post.content")
			div(class="blog_time")
				p {{$page.post.time}}
				hr
</template>


<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
	msg
	image
	time
    content
  }
}
</page-query>


<script>
	import myMeta from '~/mixin/meta.js'

	export default {
		metaInfo () {
			return {
				title: this.$page.post.title,
				meta: this.generateMeta({
					title: this.$page.post.title,
					description: this.$page.post.msg,
					image: this.$page.post.image,
					image_model: 'static'
				})
			}
		},
		mixins: [myMeta],
		mounted () {
			document.querySelector('nav ul a.blog').classList.add('current')
		},
	}
</script>


<style lang="scss">
	@import '../scss/color.scss';

	.blog_layout {
		background-color:  $color_blog_background;
	}

	.blog_box {
		background-color: white;
		overflow: hidden;
		box-shadow: 3px 5px 11px rgba(50, 50, 50, 0.3);
		margin: 5vh 0;
		border-radius: 8px;
		
		.blog_image {
			padding: 8px;
			img {
				width: 100%;
			}
		}
		.blog_title {
			padding: 20px 0;
			text-align: center;
			
			h1 {
				color: $color_text_title;
				span {
					position: relative;
				}
				span::before {
					position: absolute;
					display: block;
					content: ' ';
					width: 70%;
					height: 3px;
					left: 15%;
					bottom: -1px;
					background-color: $color_line_deep;
				}
			}
		}
		.blog_content {
			padding: 20px 3vw;

			p {
				color: $color_text_p_deep
			}
			img {
				width: 100%;
			}
		}
		.blog_time {
			padding: 0 3vw 10px 3vw;
			text-align: right;
			color: $color_text_p
		}
	}
</style>
