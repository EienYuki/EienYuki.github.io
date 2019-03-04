<template lang="pug">
	div(class="layout")
		header(class="row header")
			div(class="box")
				div(class="title")
					h1 ゆきふわり
				div(class="icons")
					a(href="https://t.co/y4vEqPiXW9" target="_blank")
						img(src="/icons/pixiv_icon.png", alt="pixiv_icon.png")
					a(href="https://twitter.com/yuki_01957" target="_blank")
						img(src="/icons/Twitter_Logo_WhiteOnBlue.png", alt="GitHub-Mark-32px.png")
					a(href="https://github.com/EienYuki" target="_blank")
						img(src="/icons/GitHub-Mark-Light-32px.png", alt="GitHub-Mark-32px.png")
			nav
				ul(class="clearfix")
					g-link(class="about" :to="{name: 'about'}") about
					g-link(class="gallery" :to="{name: 'gallery'}") gallery
					g-link(class="project" :to="{name: 'project'}") project
			div(class="bg")
			
		div(class="container view")
			slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

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

	html {
		overflow-x: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans TC', sans-serif
	}

	body {

		header {
			position: relative;
			background-color: rgb(63, 63, 63);

			.bg {
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: .5;
				background: url('/img/star2.png')
			}
			.box {
				margin: 4vh auto 0 auto;
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
				@media (max-width: 900px){
					margin-top: 40px;
				}

				ul {
					margin-left: 10%;

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

		.view {
			padding-top: 15px;

			.item {
				float: left;
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
					p {
						padding: 10px 10% 10px 12%;
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
