import React from 'react'
import Header from '../header/Header'
import Routers from '../routers/Routers'
import Fouter from '../footer/Fouter'


const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers/>
      
      </main>
      <Fouter/>
    </>
  )
}

export default Layout
