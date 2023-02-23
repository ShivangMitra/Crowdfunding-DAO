import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, Button, Image, Progress } from '@chakra-ui/react'
import { BiWalletAlt } from 'react-icons/bi'
import { FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa'

function Cards({ setPageState, data, setCampaignIndex }) {

  const handleCampaignPage = () => {
    setCampaignIndex(data.index)
    setPageState('campaign')
  }

  return (
    <Card maxW='xs' minW='xs' className='one-card' variant={'outline'} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' style={{ display: 'flex', alignItems:'center', justifyContent: 'space-between' }} >{data.title}<FaHandsHelping color={'tomato'} /></Heading>
          <Text fontSize='sm' style={{ display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '35%' }} ><BiWalletAlt color='tomato' /> <b>{' 0x369...0b9'}</b></Text>
          <Text color='tomato' fontSize='2xl' style={{display: 'flex', justifyContent: 'space-between'}} >
            {data.balance} ETH {`($${data.balance*1660})`}
            <Button onClick={handleCampaignPage} variant='solid' colorScheme='orange' backgroundColor={'tomato'} rightIcon={<FaHandHoldingUsd/>}>
            Support
            </Button>
          </Text>
          <Text color={'#0000008a'} >Target of {data.targetAmt} ETH {`($${data.targetAmt * 1660})`}</Text>
          <Progress value={(data.balance / data.targetAmt) * 100} size='xs' colorScheme='orange' />
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default Cards