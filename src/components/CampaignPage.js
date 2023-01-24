import React from 'react'
import { Button, Heading, Text, Card, CardBody, Progress, InputGroup, Input, InputRightAddon, Box } from '@chakra-ui/react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BiDonateHeart } from 'react-icons/bi'
import { BsFillPeopleFill, BsFillChatSquareQuoteFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'

function CampaignPage({ setPageState }) {

  const data = {
    minContri: {
      dis: 'Minimum Contribution',
      val: '0.001 ETH ($2.75)',
      icon: (<BiDonateHeart color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    add: {
      dis: 'Wallet Address of Campaign Creator',
      val: '0x369be63C2601CD1D332593ffA435c130460700b9',
      icon: (<FaAddressCard color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    req: {
      dis: 'Number of Requests',
      val: '5',
      icon: (<BsFillChatSquareQuoteFill color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    app: {
      dis: 'Number of Approvers',
      val: '3',
      icon: (<BsFillPeopleFill color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
  }

  return (
    <div className='campaign-page-container' >
      <div className='campaign-page-left' >
        <div className='campaign-heading' >
          <Heading marginBottom='2%' >Forest Conservation Fund</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus purus in arcu pulvinar, eu fermentum ipsum convallis. Proin ut arcu sit amet massa dignissim molestie. Vestibulum efficitur, lorem vel ullamcorper euismod, quam justo sagittis mi, sed finibus risus ipsum ut sapien. Quisque eu quam lacinia, elementum mi quis, pellentesque orci. Ut fermentum lacinia felis non pharetra. Quisque laoreet elit quis ipsum volutpat viverra. Praesent malesuada, neque sed congue interdum, dui libero venenatis tellus, eget rhoncus nulla ligula sit amet dui. Mauris fermentum neque vitae molestie porta. Fusce bibendum, augue vehicula blandit pharetra, justo ipsum scelerisque urna, eget commodo nibh orci aliquet arcu. Suspendisse varius ultricies tellus, quis euismod mauris efficitur eu.</Text>
        </div>
          {
            Object.keys(data).map(item => (
              <Card style={{ margin: '1% 0%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection:'inherit' }} key={data[item.dis]} >
                <CardBody>
                  <Text>{data[item].dis}</Text>
                  <Text fontWeight='bold' >{data[item].val}</Text>
                </CardBody>
                {
                  data[item].icon
                }
              </Card>
            ))
          }
      </div>
      <div className='campaign-page-right' >
        <Card style={{ marginBottom: '3%' }} >
          <CardBody>
            <Text fontSize='xs' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '27%' }} >Campaign Balance <AiFillInfoCircle color='tomato' /> </Text>
            <Text fontSize='xl' fontWeight='bold' display='flex' >3.12 ETH <Text color='#ff634791' margin='0% 2%' >($1234)</Text> </Text>
            <Text display='flex' >target of 12 ETH <Text color='#00000082' margin='0% 2%' >($3452)</Text></Text>
            <Progress value={25} size='xs' colorScheme='orange' marginTop='2%' />
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: '#effbed', marginBottom: '3%' }} >
          <CardBody>
            <Heading color='#29da2e' marginBottom='2%' >Contribute Now!</Heading>
            <InputGroup>
              <Input type='number' placeholder='0.01' />
              <InputRightAddon children='ETH' backgroundColor='#29da2e' color='white' />
            </InputGroup>
            <Button style={{ width: '100%', marginTop: '5%' }} colorScheme='green' backgroundColor={'#29da2e'} leftIcon={<BiDonateHeart />} >Contribute</Button>
          </CardBody>
        </Card>
        <Card style={{ marginBottom: '3%' }} >
          <CardBody>
          <Box
              onClick={() => {
                setPageState('viewRequest')
              }}
              width='100%'
              as='button'
              p={4}
              color='white'
              fontWeight='bold'
              borderRadius='md'
              bgGradient='linear(to-r, red.500, yellow.500)'
              _hover={{
                bgGradient: 'linear(to-r, teal.500, green.500)',
              }}
              marginBottom='2%'
            >
              View Withdrawal Requests
            </Box>
            <Text> You can see where these funds are being used & if you have contribute you can also approve Withdrawal Requests.</Text>
          </CardBody>
        </Card>
        <Card style={{ marginBottom: '3%' }} >
          <CardBody>
          <Box
              onClick={() => {
                setPageState('createRequest')
              }}
              width='100%'
              as='button'
              p={4}
              color='white'
              fontWeight='bold'
              borderRadius='md'
              bgGradient='linear(to-r, red.500, yellow.500)'
              _hover={{
                bgGradient: 'linear(to-r, teal.500, green.500)',
              }}
              marginBottom='2%'
            >
              Create Withdrawal Requests
            </Box>
            <Text> Hey 0x392...02b create a Withdarwal Request, take your project to new heights.</Text>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default CampaignPage