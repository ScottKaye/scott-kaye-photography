import { graphql, PageProps } from 'gatsby';
import React, { ReactElement } from 'react';

import { IndexQuery } from '../../graphql-types';
import { Gallery } from '../components/gallery';
import { Heading } from '../components/heading';
import { BaseLayout } from '../components/layouts/base-layout';

const IndexPage = (props: PageProps<IndexQuery>): ReactElement => {
  return (
    <BaseLayout title="Always an Adventure" hasPhoto>
      <Heading title="All photos" size="page" />
      <Gallery images={props.data.allGraphCmsAsset.nodes} />
    </BaseLayout>
  );
};

export const query = graphql`
  fragment GalleryFields on GraphCMS_Asset {
    handle
    gatsbyImageData(layout: CONSTRAINED, height: 400, quality: 30)
    title
    description
    album
  }

  query Index {
    allGraphCmsAsset {
      nodes {
        ...GalleryFields
      }
    }
  }
`;

export default IndexPage;
