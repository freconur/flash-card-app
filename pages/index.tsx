import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Head from 'next/head'

const Home = () => {
  
  return (
    <div>
      <Head>
        <title>Waliky store</title>
        <meta name="description" content="custom cup description" />
      </Head>

      Bienvenido Flash Card Study
    </div>
  )
}
export default withAuthUser()(Home)//funciona en client