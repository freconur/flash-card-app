import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GlobalProvider } from '../context/ContextGlobal'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <GlobalProvider>
          <Main />
          <div id="portal-navbar"></div>
          <NextScript />

          </GlobalProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument