import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";
import ScreenSizeLayout from '../components/layouts/ScreenSizeLayout'

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
`

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
        </Head>
        <Container>
          <ScreenSizeLayout>
            <Component {...pageProps} router={router} />
          </ScreenSizeLayout>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
