import styled from '@emotion/styled';
import exifr from 'exifr';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';
import React, { ReactElement, ReactNode, useMemo, useState } from 'react';

const ExifData = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
  padding: 5px;
  font-size: 10px;
  font-family: 'B612 Mono', monospace;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  transition: transform 100ms ease-in-out;
  transform: translateY(100%);
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &:hover {
    ${ExifData} {
      transform: none;
    }
  }
`;

const GalleryGatsbyImage = styled(GatsbyImage)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface GalleryImageProps extends GatsbyImageProps {
  id: string;
}

// Thanks https://stackoverflow.com/a/70131476 !
const decimalToFraction = (decimal: number): [number, number] => {
  if (decimal === 0) return [0, 1];

  const a = Math.abs(decimal);

  let n = 0;
  let d = 1;
  let r;

  for (;;) {
    r = n / d;

    if (Math.abs((r - a) / a) < 0.0001) {
      break;
    }

    if (r < a) {
      n++;
    } else {
      d++;
    }
  }

  return [decimal < 0 ? -n : n, d];
};

export const GalleryImage = (props: GalleryImageProps): ReactElement => {
  const [exif, setExif] = useState<{ FocalLength: number; FNumber: number; ISO: number; ExposureTime: number }>();

  const handleLoad = async (): Promise<void> => {
    // eslint-disable-next-line unicorn/prefer-query-selector
    const hackToGetRenderedImageElement = document.getElementById(props.id) as HTMLImageElement;
    const parsedExif = await exifr.parse(hackToGetRenderedImageElement.currentSrc);

    setExif(parsedExif);
  };

  const exifDataElement = useMemo((): ReactNode => {
    if (!exif || !exif?.ExposureTime || !exif.FocalLength || !exif.FNumber || !exif.ISO)
      return <ExifData>Unknown photo info 😞</ExifData>;

    const exposureTimeFraction = decimalToFraction(exif.ExposureTime);

    return (
      <ExifData>
        {exif.FocalLength}mm {exposureTimeFraction[0]}/{exposureTimeFraction[1]}s f{exif.FNumber} ISO {exif.ISO}
      </ExifData>
    );
  }, [exif]);

  return (
    <Container>
      <GalleryGatsbyImage {...props} onLoad={handleLoad} />
      {exifDataElement}
    </Container>
  );
};
