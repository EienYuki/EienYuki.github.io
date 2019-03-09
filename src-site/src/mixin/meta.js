export default {
	methods: {
		generateMeta ({og_type, title, description, image, url, image_model}) {
			let base = 'https://me.asutora.com'
			if (image_model == 'static') base = ''
			let out = []
			
			if (description) out.push( { key: 'description', name: 'description', content: description } )

			if (og_type) out.push( { key: 'og_type', property: 'og:type', content: og_type } )
			if (title) out.push( { key: 'og_title', property: 'og:title', content: title } )
			if (description) out.push( { key: 'og_description', property: 'og:description', content: description } )
			if (image) out.push( { key: 'og_image', property: 'og:image', content: `${base}${image}` } )
			if (url) out.push( { key: 'og_url', property: 'og:url', content: url } )
			
			
			out.push({ key: 'twitter_card', name: 'twitter:card', content: 'summary' })
			out.push({ key: 'twitter_site', name: 'twitter:site', content: '@yuki_01957' })
			out.push({ key: 'twitter_creator', name: 'twitter:creator', content: '@yuki_01957' })
			
			return out
		}
	}
}