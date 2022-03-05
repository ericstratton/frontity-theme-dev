import React from 'react';
import { connect, Global, css } from 'frontity';
import gutembergStyle from './../styles/gutemberg/style.css';
import gutembergTheme from './../styles/gutemberg/theme.css';

import { fixCss } from './../helpers/css';
import globalStyle from '../styles/theme/global-styles';
import Layout from './layout';
import PostList from './post-list';

const Root = ({ state }) => {
  const colors = state.theme.colors;
  const fixedGutembergStyle = fixCss(gutembergStyle);
  const fixedGutembergTheme = fixCss(gutembergTheme);

  return (
    <>
      <Global styles={css(fixedGutembergStyle)} />
      <Global styles={css(fixedGutembergTheme)} />
      <Global styles={globalStyle(colors)} />
      <Layout>
        <main>
          <PostList />
        </main>
      </Layout>
    </>
  );
};

export default connect(Root);