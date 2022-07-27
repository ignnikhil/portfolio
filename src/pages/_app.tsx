import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { NextComponentType, NextPageContext } from "next"
import Noop from "../components/Noop"

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & {
    Layout?: React.FC<{ pageProps: any }>
  }
}) {
  const Layout = Component.Layout || Noop

  return (
    <Layout {...pageProps}>
      <Head>
        <title>Nikhil Singh — Product Designer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
