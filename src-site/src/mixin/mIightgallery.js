export default {
	methods: {
		lightGalleryInit () {
			require('lightgallery.js')
			for (const iterator of document.getElementsByClassName('lightgallery')) {
				lightGallery(iterator, {
					thumbnail: true,
					animateThumb: true,
					counter: false,
					download: true	
				})	
			}
		}
	},
	mounted () {
		this.lightGalleryInit()
	}
}