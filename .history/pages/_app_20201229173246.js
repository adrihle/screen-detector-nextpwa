import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";
import ScreenSizeLayout from '../components/smart/ScreenSizeLayout'

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
    --max-width: 50rem;
  }

  body {
    background: var(--background--1);
    font-family: 'PT Sans', sans-serif;
    margin: 0;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--padding);
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Head>
        <Container>
          {/* here a style layout */}
          <Main>
            {/* here a smart screen detector */}
            <ScreenSizeLayout>
              <Component {...pageProps} router={router} />
            </ScreenSizeLayout>
          </Main>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
