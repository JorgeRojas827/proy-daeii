import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../sections/Login'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Librioteca</title>
        <link rel="icon" href="assets/logo.png" />
      </Head>

      <Login />
    </div>
  )
}

export default Home
