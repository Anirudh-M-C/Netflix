import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Banner from './Component/banner/Banner'
import Rowposter from './Component/rowposter/Rowposter'
import { action, originals,horror, comedy, anime } from './Urls'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowposter url={originals} title='Netflix Originals'/>
      <Rowposter url={action} title='Action Movies' isSmall />
      <Rowposter url={horror} title='Horror Movies' isSmall />
      <Rowposter url={comedy} title='Comedy Movies' isSmall />
      <Rowposter url={anime} title='Anime' isSmall isAnime />
    </div>
  )
}

export default App