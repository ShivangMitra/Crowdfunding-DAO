import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    Text,
    Divider
  } from '@chakra-ui/react'
import { FaEthereum } from 'react-icons/fa'

function Stats({ allCampaigns }) {
  return (
    <div className='stats' >
        <Text fontSize='4xl' color='white' >Bring a creative project to life.</Text>
        <div className='stats-items' >
            <Stat className='stats-item'>
                <StatNumber>{allCampaigns.length}</StatNumber>
                <StatLabel>Projects Funded</StatLabel>
                {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
            </Stat>
            <Divider orientation='vertical'/>
            <Stat className='stats-item'>
                <StatNumber style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >0.00 ETH<FaEthereum/></StatNumber>
                <StatLabel>Towards Creative Work</StatLabel>
                {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
            </Stat>
        </div>
    </div>
  )
}

export default Stats