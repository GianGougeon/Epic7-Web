import React from 'react'
import Filters from '../../components/Filters'
import Heros from '../../components/Heros'

const Home = ({Epic7Api}) => {
  return (
    <div>
        
        <Filters Epic7Api={Epic7Api} />
        <Heros Epic7Api={Epic7Api} />
    </div>
  )
}

export default Home