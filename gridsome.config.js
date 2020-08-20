// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/scss/globals.scss')],
    });
}

module.exports = {
  siteName: 'Chad Collins Developer Portfolio',
  siteDescription: 'A portfolio website for full stack developer Chad Collins',
  templates: {
    Post: '/blog/:title',
    Project: '/projects/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/posts/**/*.md',
        typeName: 'Post',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/projects/**/*.md',
        typeName: 'Project',
        refs: {
          tools: {
            typeName: 'Tools',
          },
        },
      },
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@images', '@/assets/images');
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    );
  },
};
