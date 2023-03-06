import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import ReqCampaignCard from './ReqCampaignCard'

function ViewRequests({ setPageState, donatedCampaigns, setCampaignIndex }) {

    const handleHome = () => {
        setPageState('home')
        }

  return (
    <div className='campaigns-container' >
        <div onClick={handleHome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '8%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>

        <Heading style={{ marginBottom: '5%' }} >Fund Requests <Text color='#0000005e' fontSize='ig' >Campaigns you have donated to</Text></Heading>

        {
          donatedCampaigns.map((camp, key) => (
            <ReqCampaignCard key={key} setPageState={setPageState} setCampaignIndex={setCampaignIndex} camp={camp} />
          ))
        }
    </div>
  )
}

export default ViewRequests