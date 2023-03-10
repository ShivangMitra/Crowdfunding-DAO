import React from 'react'
import { Button, Heading, Text } from '@chakra-ui/react'
import { Card, CardBody, Stack, Image, Progress } from '@chakra-ui/react'
import { FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa'

function ReqCampaignCard({ setPageState, setCampaignIndex, camp }) {

    const handleCampaignPage = () => {
        setCampaignIndex(camp.index)
        setPageState('viewRequest')
        }

  return (
    <Card direction={{ base: 'column', sm: 'row' }} variant={'outline'} style={{ marginBottom: '2%', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
            <Image
            src={camp.url}
            borderRadius='lg'
            maxW={{ base: '100%', sm: '300px' }}
            objectFit='cover'
            />
            <Stack width='70%'>
            <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width:'100%' }} >
                <Heading size='md' style={{ display: 'flex', alignItems:'center', justifyContent: 'space-between' }} >{camp.title}<FaHandsHelping color={'tomato'} /></Heading>
                <Text color='tomato' fontSize='2xl' style={{display: 'flex', justifyContent: 'space-between'}} >
                    {camp.balance} ETH {`($${camp.balance * 1661})`}
                    <Button onClick={handleCampaignPage} variant='solid' colorScheme='orange' backgroundColor={'tomato'} rightIcon={<FaHandHoldingUsd/>}>
                    View Requests
                    </Button>
                </Text>
                <Text color={'#0000008a'} >Target of {camp.targetAmt} ETH {`($${camp.targetAmt * 1661})`}</Text>
                <Progress value={(camp.balance / camp.targetAmt) * 100} size='xs' colorScheme='orange' />
            </CardBody>
            </Stack>
        </Card>
  )
}

export default ReqCampaignCard