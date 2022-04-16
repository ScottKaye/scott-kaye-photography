import { graphql, PageProps } from 'gatsby';
import React, { ReactElement } from 'react';

import { AlbumTemplateQuery } from '../../graphql-types';
import { Gallery } from '../components/gallery';
import { BaseLayout } from '../components/layouts/base-layout';

const AlbumTemplate = (props: PageProps<AlbumTemplateQuery, { album: string }>): ReactElement => {
  return (
    <BaseLayout title={props.pageContext.album}>
      <Gallery images={props.data.allGraphCmsAsset.nodes} />
    </BaseLayout>
  );
};

export const query = graphql`
  query AlbumTemplate($album: GraphCMS_Album!) {
    allGraphCmsAsset(filter: { album: { eq: $album } }) {
      nodes {
        ...GalleryFields
      }
    }
  }
`;

export default AlbumTemplate;
