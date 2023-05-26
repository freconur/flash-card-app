import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import Footer from '@components/Footer/Footer'
import dynamic from 'next/dynamic'
// import { Navbar } from '../components/Navbar'

const DynamicNavbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})
type Props ={
    children: JSX.Element
}
const Layout= ({children}:Props) => {
  return (
    <div className='grid grid-rows-layoutGlobal min-h-[100vh]'>
      {/* <Navbar/> */}
      <DynamicNavbar/>
        {children}
        {/* <Footer/> */}
    </div>
  )
}

export default Layout