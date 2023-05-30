import { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import '../styles/global.css'
import initAuth from '../initAuth' // the module you created above

initAuth()
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp