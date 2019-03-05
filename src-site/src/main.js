// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'bootstrap/dist/css/bootstrap.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.htmlAttrs = { lang: 'zh-Hant-TW' }
  //console.log(head)
  Vue.component('Layout', DefaultLayout)

}
