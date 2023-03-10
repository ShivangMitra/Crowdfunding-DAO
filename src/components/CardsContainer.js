import React from 'react'
import Cards from './Cards'

function CardsContainer({ setPageState, allCampaigns, setCampaignIndex, loading }) {
  return (
    <div className='cards-container' >
        {
          loading
          ?
          (
            <div>Loading</div>
          )
          :
          allCampaigns.map((data, index) => (
            <Cards setPageState={setPageState} data={data} key={index} setCampaignIndex={setCampaignIndex} />
          ))
        }
    </div>
  )
}

export default CardsContainer