import React from 'react'
import Cards from './Cards'

function CardsContainer({ setPageState }) {
  return (
    <div className='cards-container' >
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
        <Cards setPageState={setPageState} />
    </div>
  )
}

export default CardsContainer