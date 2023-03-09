import React from 'react'
import MyCampaignCard from './MyCampaignCard'
import { Heading, Text } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'

function MyCampaigns({ setPageState, managerCampaigns, setCampaignIndex, weiToEther }) {

    const handleHome = () => {
        setPageState('home')
        }

  return (
    <div className='campaigns-container' >
        <div onClick={handleHome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '8%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>

        <Heading style={{ marginBottom: '5%' }} >My Campaigns</Heading>

        {
          managerCampaigns.map((camp, ind) => (
            <MyCampaignCard key={ind} setPageState={setPageState} camp={camp} setCampaignIndex={setCampaignIndex} weiToEther={weiToEther} />
          ))
        }
    </div>
  )
}

export default MyCampaigns