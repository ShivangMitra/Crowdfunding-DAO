import React from 'react'
import { Button, Heading, Text } from '@chakra-ui/react'
import { Card, CardBody, Stack, Image, Progress } from '@chakra-ui/react'
import { FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa'

function ReqCampaignCard({ setPageState }) {

    const handleCampaignPage = () => {
        setPageState('viewRequest')
        }

  return (
    <Card direction={{ base: 'column', sm: 'row' }} variant={'outline'} style={{ marginBottom: '2%', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            maxW={{ base: '100%', sm: '300px' }}
            objectFit='cover'
            />
            <Stack>
            <CardBody width='190%' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                <Heading size='md' style={{ display: 'flex', alignItems:'center', justifyContent: 'space-between' }} >Forest Conservation Fund<FaHandsHelping color={'tomato'} /></Heading>
                <Text color='tomato' fontSize='2xl' style={{display: 'flex', justifyContent: 'space-between'}} >
                    3.12 ETH {'($123456)'}
                    <Button onClick={handleCampaignPage} variant='solid' colorScheme='orange' backgroundColor={'tomato'} rightIcon={<FaHandHoldingUsd/>}>
                    View Requests
                    </Button>
                </Text>
                <Text color={'#0000008a'} >Target of 12 ETH {'($123456)'}</Text>
                <Progress value={20} size='xs' colorScheme='orange' />
            </CardBody>
            </Stack>
        </Card>
  )
}

export default ReqCampaignCard