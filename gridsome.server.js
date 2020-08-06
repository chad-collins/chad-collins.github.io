// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const yaml = require('js-yaml');

const fileContents = fs.readFileSync('content/tech/tools.yml', 'utf8');
const tools = yaml.safeLoad(fileContents);

module.exports = function(api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });

  api.loadSource(async (actions) => {
    const collection = actions.addCollection({
      typeName: 'Tools',
    });

    for (const tool of tools) {
      collection.addNode(tool);
    }
  });
};
