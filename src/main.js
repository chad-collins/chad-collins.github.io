// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/globals.scss';
import DefaultLayout from '~/layouts/Default.vue';
import 'prismjs/themes/prism.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faGithub, faLinkedin, faEnvelope, faSun);

export default function(Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/dqo2kqf.css',
  }),
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
  require('gridsome-plugin-remark-prismjs-all/themes/tomorrow.css');
}
