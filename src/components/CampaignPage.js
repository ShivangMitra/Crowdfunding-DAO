import React, {useState, useRef} from 'react'
import { Button, Heading, Text, Card, CardBody, Progress, InputGroup, Input, InputRightAddon, Box, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from '@chakra-ui/react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BiDonateHeart } from 'react-icons/bi'
import { BsFillPeopleFill, BsFillChatSquareQuoteFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'

function CampaignPage({ setPageState, campaign, currentAdd, signer, etherToWei }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const [contribution, setContribution] = useState('')
  const errorState = contribution === '' || (Number(contribution) === 0)

  const [newTarget, setNewTarget] = useState('')
  const errorNewTarget = newTarget === '' || (Number(newTarget) === 0)

  const handleContribution = () => {
    const signedContract = campaign.contract.connect(signer)
    signedContract.contribute({value: etherToWei(contribution)})
  }

  const handleSwitchStatus = () => {
    const signedContract = campaign.contract.connect(signer)
    signedContract.switchCampaignActiveStatus()
  }

  function handleModifyTarget(){
    const signedContract = campaign.contract.connect(signer)
    signedContract.modifyTarget(etherToWei(newTarget))
  }

  const data = {
    minContri: {
      dis: 'Minimum Contribution',
      val: `${campaign.minContri} ETH ($${campaign.minContri * 1661})`,
      icon: (<BiDonateHeart color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    add: {
      dis: 'Wallet Address of Campaign Creator',
      val: campaign.manager,
      icon: (<FaAddressCard color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    req: {
      dis: 'Number of Requests',
      val: campaign.reqLength,
      icon: (<BsFillChatSquareQuoteFill color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
    app: {
      dis: 'Number of Approvers',
      val: campaign.appCount,
      icon: (<BsFillPeopleFill color='#ff634780' fontSize='300%' style={{ marginRight: '5%' }} />)
    },
  }

  return (
    <div className='campaign-page-container' >
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              { campaign.active ? 'Deactivate Campaign' : 'Activate Campaign' }
            </AlertDialogHeader>

            {
              campaign.active
              ?
              (
                <AlertDialogBody>
                  Are you sure? Your campaign will move to the archives after this action.
                </AlertDialogBody>
              )
              :
              (
                <AlertDialogBody>
                  Are you sure? Your campaign will move to active campaigns after this action.
                </AlertDialogBody>
              )
            }

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme={ campaign.active ? 'red' : 'green' } onClick={handleSwitchStatus} ml={3}>
                { campaign.active ? 'Deactivate' : 'Activate' }
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <div className='campaign-page-left' >
        <div className='campaign-heading' >
          <Heading marginBottom='2%' >{campaign.title}</Heading>
          <Text>{campaign.desc}</Text>
        </div>
          {
            Object.keys(data).map((item, key) => (
              <Card style={{ margin: '1% 0%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection:'inherit' }} key={key} >
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
            <Text fontSize='xl' fontWeight='bold' display='flex' >{campaign.balance} ETH <Text color='#ff634791' margin='0% 2%' >(${campaign.balance* 1661})</Text> </Text>
            <Text display='flex' >target of {campaign.targetAmt} ETH <Text color='#00000082' margin='0% 2%' >(${campaign.targetAmt * 1661})</Text></Text>
            <Progress value={(campaign.balance / campaign.targetAmt) * 100} size='xs' colorScheme='orange' marginTop='2%' />
          </CardBody>
        </Card>
        <Card style={{ backgroundColor: '#effbed', marginBottom: '3%' }} >
          <CardBody>
            <Heading color='#29da2e' marginBottom='2%' >Contribute Now!</Heading>
            <InputGroup>
              <Input type='number' placeholder={campaign.minContri} onChange={(e) => {setContribution(e.target.value)}} />
              <InputRightAddon children='ETH' backgroundColor='#29da2e' color='white' />
            </InputGroup>
            <Button isActive={errorState} onClick={handleContribution} style={{ width: '100%', marginTop: '5%' }} colorScheme='green' backgroundColor={'#29da2e'} leftIcon={<BiDonateHeart />} >Contribute</Button>
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
        {
          campaign.manager.toUpperCase() === currentAdd.toUpperCase()
          ?
          (
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
                <Text> Hey {currentAdd.substring(0,5)+'...'+currentAdd.substring(currentAdd.length-4)} create a Withdarwal Request, take your project to new heights.</Text>
              </CardBody>
            </Card>
          )
          :
          null
        }
        {
          campaign.manager.toUpperCase() === currentAdd.toUpperCase()
          ?
          (
            <Card style={{ marginBottom: '3%' }} >
              <CardBody>
              <InputGroup>
                <Input type='number' placeholder={Number(campaign.balance) + 0.1} onChange={(e) => {setNewTarget(e.target.value)}} />
                <InputRightAddon children='ETH' backgroundColor='#2e49d6' color='white' />
              </InputGroup>
              <Box
                  onClick={() => {if(!errorNewTarget)handleModifyTarget()}}
                  width='100%'
                  as='button'
                  p={4}
                  color='white'
                  fontWeight='bold'
                  borderRadius='md'
                  bgGradient={errorNewTarget ? 'linear(to-r, #4e4e4e, #555555)' : 'linear(to-r, #c73ee5, #2e49d6)'}
                  _hover={errorNewTarget ? null :{
                    bgGradient: 'linear(to-r, #922ea7, #203396)',
                  }}
                  marginBottom='2%'
                  marginTop='5%'
                >
                  Modify Target
                </Box>
                <Text> Modify your campaign target according to your needs.</Text>
              </CardBody>
            </Card>
          )
          :
          null
        }
        {
          campaign.manager.toUpperCase() === currentAdd.toUpperCase()
          ?
          (
            <Card style={{ marginBottom: '3%' }} >
              <CardBody>
              <Box
                  onClick={onOpen}
                  width='100%'
                  as='button'
                  p={4}
                  color='white'
                  fontWeight='bold'
                  borderRadius='md'
                  bgGradient={campaign.active ? 'linear(to-r, red.500, red.500)' : 'linear(to-r, #3ee553, #3ec8e5)'}
                  _hover={campaign.active ? {
                    bgGradient: 'linear(to-r, #852525, red.500)',
                  } : {
                    bgGradient: 'linear(to-r, #32ba43, #34aec7)'
                  }}
                  marginBottom='2%'
                >
                  {campaign.active ? 'Deactivate' : 'Activate'}
                </Box>
                <Text> Hey {currentAdd.substring(0,5)+'...'+currentAdd.substring(currentAdd.length-4)} want to {campaign.active ? 'deactivate' : 'activate'} your campaign.</Text>
              </CardBody>
            </Card>
          )
          :
          null
        }
      </div>
    </div>
  )
}

export default CampaignPage