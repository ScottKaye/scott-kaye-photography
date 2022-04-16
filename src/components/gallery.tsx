import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

import { GalleryFieldsFragment } from '../../graphql-types';
import { GalleryImage } from './gallery-image';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

interface GalleryProps {
  images: GalleryFieldsFragment[];
}

export const Gallery = ({ images }: GalleryProps): ReactElement => {
  return (
    <Container>
      {images.map((image) => {
        return (
          <GalleryImage
            key={image.handle}
            id={image.handle}
            image={image.gatsbyImageData}
            alt={image.title ?? 'Untitled'}
          />
        );
      })}
    </Container>
  );
};
