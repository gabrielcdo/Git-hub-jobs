import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import './../styles/global.scss'
function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  
  )

}

export default MyApp
