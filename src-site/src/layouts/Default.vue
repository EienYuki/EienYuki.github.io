<template lang="pug">
	div(class="layout")
		header(class="row header")
			div(class="box")
				div(class="title")
					h1 {{$static.metaData.siteName}}
				div(class="icons")
					a(href="https://t.co/y4vEqPiXW9" target="_blank" rel="noopener")
						img(src="/icons/pixiv_icon.png", alt="pixiv_icon.png")
					a(href="https://twitter.com/yuki_01957" target="_blank" rel="noopener")
						img(src="/icons/Twitter_Logo_WhiteOnBlue.png", alt="GitHub-Mark-32px.png")
					a(href="https://github.com/EienYuki" target="_blank" rel="noopener")
						img(src="/icons/GitHub-Mark-Light-32px.png", alt="GitHub-Mark-32px.png")
			nav
				ul(class="container clearfix")
					li
						g-link(class="about" :to="{name: 'about'}") About
					li
						g-link(class="gallery" :to="{name: 'gallery'}") Gallery
					li
						g-link(class="project" :to="{name: 'project'}") Project
					li
						g-link(class="test" :to="{name: 'test'}") Test
			div(class="sidebar")
			
		div(class="container view")
			transition(name="fade" appear)
				slot
				
		footer
			div(class="text")
				p Copyright © 2019 by EienYuki.
			div(class="bg")
		
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
	export default {
		metaInfo: {
			meta: [
				{ key: 'theme-color', name: 'theme-color', content: '#ffc966' }
			]
		},
		mounted () {
			
		},
	}
</script>

<style lang="scss">
	@import '../scss/color.scss';

	@font-face {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		src: url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format('woff2'),
			url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format('woff'),
			url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format('opentype');
		font-display: fallback;
	}

	::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
		background-color: #F5F5F5;
	}
	::-webkit-scrollbar
	{
		width: 6px;
		background-color: #F5F5F5;
	}
	::-webkit-scrollbar-thumb
	{
		background-color: rgba(0,0,0,0.15);
	}
	
	.fade-enter-active {
		transition: opacity .4s;
	}

	.fade-enter {
		opacity: 0;
	}

	html {
		overflow-x: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans TC', sans-serif
	}

	body {
		width: 100vw;
		overflow-x: hidden;
		
		header {
			position: relative;
			margin: 0 !important;
			
			background-image: url('/img/練習84.Banner.jpg');
			background-size: cover;
			background-repeat: no-repeat;

			.sidebar {
				position: absolute;
				width: 100vw;
				height: 100%;
				background-color: $color_nav_sidebar;
				opacity: .2;
			}

			.box {
				margin: 4vh auto;
				z-index: 10;

				.title {
					opacity: .98;
					h1 {
						color: snow;
					}
				}
				.icons {
					margin-top: 10px;
					opacity: .95;

					a {
						padding-right: 10px;
						color: snow;

						img {
							height: 32px;
						}
					}
				}
			}

			nav {
				width: 100%;
				margin-top: 50px;
				z-index: 10;
				/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,000000+100&0+0,0.65+100 */
				background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, $color_nav_background 100%); /* FF3.6-15 */
				background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,$color_nav_background 100%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,$color_nav_background 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
				
				@media (max-width: 900px){
					margin-top: 40px;
				}

				ul {
					margin-left: 10%;
					padding-top: 10px;

					a:hover {
						color: unset;
						text-decoration: none;
					}
					li, a {
						list-style-type: none;
						float: left;
						cursor: pointer;
						margin-left: 10px;
						font-size: 1.5rem;
						position: relative;
						color: snow;

						&::before {
							position: absolute;
							bottom: -3px;
							left: 0;
							background-color: #d6b16e;
							display: block;
							content: ' ';
							width: 80%;
							height: 3px;
							margin-left: 10%;
							opacity: 0;
							transition: all .2s ease-in-out;
						}
						&.current::before {
							opacity: 1;
							background-color: $color_line;
						}
						
					}
				}
			}
		}

		footer {
			height: 12vh;
			background-color: $color_footer_background;
			position: relative;

			.text {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				color: $color_footer_light;
			}
			.bg {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				opacity: .5;
				background: url('/img/star2.png')
			}
		}

		.view {
			padding-top: 15px;

			.item {
				padding: 0 0 3vh 0;

				img {
					width: 90%;
					margin-left: 5%;
					border-radius: 7px;

					&:hover {
						cursor: pointer;
					}
				}
				a {
					color: $color_text_title;
					border-radius: 8px;
					padding: 1rem 0 0 0;
					border: 0 solid #ffdcb2;
					transition: border .2s ease-in-out;
					&:hover {
						border: 1px solid #ffdcb2;
					}
					p {
						padding: 10px 0 0px 6%;
					}
					p.msg {
						color: $color_text_p;
						padding: 0;
    					margin-left: 10%;	
					}
				}
				p {
					margin-left: 5%;
				}

				a:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>
