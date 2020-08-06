// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/globals.scss';
import DefaultLayout from '~/layouts/Default.vue';
import 'prismjs/themes/prism.css';

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/dqo2kqf.css',
  }),
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
}
