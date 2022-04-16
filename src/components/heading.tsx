import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

interface HeaderProps {
  title: string;
  size: 'hero' | 'page';
}

const HeadingElement = styled.h1<{ size: HeaderProps['size'] }>`
  font-family: 'Permanent Marker', sans-serif;
  line-height: 1em;
  font-size: 5em;
  text-align: center;

  ${(props): SerializedStyles => {
    const sizeMap: { [key in HeaderProps['size']]: SerializedStyles } = {
      hero: css`
        font-size: 5em;
      `,
      page: css`
        font-size: 3em;
      `,
    };

    return sizeMap[props.size];
  }}
`;

export const Heading = (props: HeaderProps): ReactElement => {
  return <HeadingElement size={props.size}>{props.title}</HeadingElement>;
};
