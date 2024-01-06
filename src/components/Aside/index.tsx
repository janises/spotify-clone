import React from 'react'
import Header from '../Header'
import Playlists from '../Playlists'
import './index.css'

const Aside = () => {
  
  return (
    <div className='asideContainer'>
      <Header />
      <Playlists />
    </div>
  )
}

export default Aside