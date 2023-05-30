import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Head from 'next/head'

const Home = () => {
  const user = useAuthUser()
  console.log('user', user)
  return (
    <div>
      <Head>
        <title>Waliky store</title>
        <meta name="description" content="custom cup description" />
      </Head>
      aqui sera la home
    </div>
  )
}
export default withAuthUser()(Home)//funciona en client