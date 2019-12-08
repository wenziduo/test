import App, { Container } from 'next/app'
import React from 'react'
import Header from '../component/Header'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import '../public/app.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    let cookies = {}
    console.log('ctx.isServer', ctx.isServer)
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
        <div
          className="layout-footer"
          style={{
            textAlign: 'center',
            width: '100%',
            height: 50,
            lineHeight: '50px',
            fontSize: 13,
            color: '#333',
            backgroundColor: '#f8f9fa'
          }}
        >
          <span>Copyright © 2017 - 2027 逗儿瓢个人博客</span>
        </div>
      </Container>
    )
  }
}
