import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Banner from './Component/banner/Banner'
import Rowposter from './Component/rowposter/Rowposter'
import { action, originals } from './Urls'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowposter url={originals} title='Netflix Originals'/>
      <Rowposter url={action} title='Action' isSmall />
    </div>
  )
}

export default App