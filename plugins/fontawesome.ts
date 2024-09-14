import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons' // Brand icons
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS

// Disable auto-adding CSS (we'll add it manually)
config.autoAddCss = false

// Add icons to the library
library.add(fas, fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
