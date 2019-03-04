export default {
	methods: {
		lightGalleryInit () {
			require('lightgallery.js')
			lightGallery(document.getElementById('lightgallery'), {
				thumbnail: true,
				animateThumb: true,
				counter: false,
				download: false	
			})
		}
	},
	mounted () {
		this.lightGalleryInit()
	}
}