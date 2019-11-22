import App, { Container } from 'next/app'
import React from 'react'
import Header from '../component/Header'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    let cookies = {}
    if (ctx.isServer) {
      cookies = parseCookies(ctx)
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx, router, cookies })
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
