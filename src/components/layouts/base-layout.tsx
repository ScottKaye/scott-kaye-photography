import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { Helmet } from 'react-helmet';

import { BaseLayoutQuery } from '../../../graphql-types';
import { useInterval } from '../../util/use-interval';
import { Heading } from '../heading';

type BaseLayoutProps = {
  title: string;
  hasPhoto?: boolean;
};

const Container = styled.div``;

const HeaderGatsbyImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Header = styled.div<{ hasPhoto: boolean }>`
  display: grid;
  grid-template-rows: min-content auto;
  width: 100%;
  position: relative;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 30px;

  nav {
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 1em;
    margin-top: 20px;
    letter-spacing: 0.15em;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      gap: 40px 20px;
    }

    a {
      display: block;
      text-decoration: none;
      color: inherit;
      padding: 15px;
      position: relative;

      &:hover,
      &.active {
        border-bottom: 1px solid currentColor;

        &::before {
          opacity: 0.1;
        }
      }

      &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(transparent, currentColor);
        z-index: -1;
        opacity: 0;
        transition: opacity 100ms ease-in-out;
      }
    }
  }

  ${(props): SerializedStyles => {
    if (props.hasPhoto) {
      return css`
        height: 95vh;
        color: #fff;

        nav {
          filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
        }
      `;
    }

    return css`
      color: #222;
    `;
  }}
`;

export const BaseLayout = (props: PropsWithChildren<BaseLayoutProps>): ReactElement => {
  const data = useStaticQuery<BaseLayoutQuery>(graphql`
    query BaseLayout {
      allGraphCmsAsset(filter: { headerCandidate: { eq: true } }) {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH, quality: 50, placeholder: DOMINANT_COLOR)
          title
        }
      }
      allSitePage(filter: { pluginCreator: { name: { eq: "default-site-plugin" } } }) {
        nodes {
          path
          pageContext
        }
      }
    }
  `);

  const [photoIndex, setPhotoIndex] = useState(Math.trunc(Math.random() * data.allGraphCmsAsset.nodes.length));

  useInterval((): void => {
    let nextIndex = photoIndex + 1;

    if (nextIndex >= data.allGraphCmsAsset.nodes.length) {
      nextIndex = 0;
    }

    setPhotoIndex(nextIndex);
  }, 10000);

  return (
    <Container>
      <Helmet>
        <title>{props.title} - Scott Kaye Photography</title>
      </Helmet>

      <Header hasPhoto={props.hasPhoto ?? false}>
        {props.hasPhoto && <HeaderGatsbyImage image={data.allGraphCmsAsset.nodes[photoIndex].gatsbyImageData} alt="" />}
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            {data.allSitePage.nodes.map((album) => (
              <li key={album.path}>
                <Link to={album.path} activeClassName="active">
                  {album.pageContext.album}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Heading title={props.title} size="hero" />
      </Header>

      {props.children}
    </Container>
  );
};
