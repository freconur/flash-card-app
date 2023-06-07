import { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import '../styles/global.css'
import initAuth from '../initAuth' // the module you created above
import { GlobalProvider } from '../context/ContextGlobal'

initAuth()
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <GlobalProvider>
      <Component {...pageProps} />
      </GlobalProvider>
    </Layout>
  )
}

export default MyApp