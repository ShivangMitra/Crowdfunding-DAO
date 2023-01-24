import React from 'react'
import Cards from './Cards'

function CardsContainer({ setPageState }) {
  return (
    <div className='cards-container' >
        <Cards setPageState={setPageState} />
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default CardsContainer