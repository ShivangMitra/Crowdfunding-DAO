import React from 'react'
import MyCampaignCard from './MyCampaignCard'
import { Heading, Text } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'

function MyCampaigns({ setPageState }) {

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

        <MyCampaignCard setPageState={setPageState} />
        <MyCampaignCard setPageState={setPageState} />
        <MyCampaignCard setPageState={setPageState} />
        <MyCampaignCard setPageState={setPageState} />
    </div>
  )
}

export default MyCampaigns