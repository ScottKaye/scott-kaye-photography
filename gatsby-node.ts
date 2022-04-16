import path from 'path';

module.exports = {
  createPages: async function createPages({ actions, graphql, reporter }): Promise<void> {
    const { data, errors } = await graphql(`
      query CreatePages {
        allGraphCmsAsset {
          distinct(field: album)
        }
      }
    `);

    if (errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);

      return;
    }

    const albumTemplate = path.resolve(`./src/templates/album.tsx`);

    data.allGraphCmsAsset.distinct.forEach((album: string) => {
      actions.createPage({
        path: album.toLowerCase(),
        component: albumTemplate,
        context: { album },
      });
    });
  },
};
