import React, {useState} from 'react'
import { Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Heading, Text, InputGroup, InputRightAddon, InputLeftAddon } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'

function CreateCampaign({ setPageState, campaignFactory, signer }) {
 
    const handleHome = () => {
        setPageState('home')
    }
    
    const [input, setInput] = useState({
        minContri: null,
        name: null,
        desc: null,
        url: null,
        targetAmt: null
    })
    
    const handleCreate = () => {
        const campaignFactorySigner = campaignFactory.connect(signer)
        campaignFactorySigner.createCampaign(input.minContri, input.name, input.desc, input.targetAmt, input.url)
    }

    const errorMinContri = input.minContri === ''
    const errorName = input.name === ''
    const errorDesc = input.desc === ''
    const errorUrl = input.url === ''
    const errorTarget = input.targetAmt === ''

  return (
    <div className='form-container' >
        <div onClick={handleHome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '15%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>
        <Heading style={{ marginBottom: '5%' }} >Create a New Campaign</Heading>

        <FormControl style={{ marginBottom: '3%' }} >
            <FormLabel>Minimum Contribution Amount</FormLabel>
                <InputGroup>
                    <Input type='number' value={input.minContri} onChange={(e) => {
                        setInput({...input, minContri: e.target.value})
                    }} />
                    <InputRightAddon children='ETH' />
                </InputGroup>
                {!errorMinContri ? (
                    <FormHelperText >
                    This is the minimum amount that people will donate to be a part of your campaign.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage >Minimum amount is required.</FormErrorMessage>
                )}
        </FormControl>
        <FormControl isInvalid={errorName} style={{ marginBottom: '3%' }} >
            <FormLabel>Campaign Name</FormLabel>
                <InputGroup>
                    <Input type='text' value={input.name} onChange={(e) => {
                        setInput({...input, name: e.target.value})
                    }} />
                </InputGroup>
                {!errorName ? (
                    <FormHelperText >
                    A name is the most important thing of a campaign.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage >Name is required.</FormErrorMessage>
                )}
        </FormControl>
        <FormControl isInvalid={errorDesc} style={{ marginBottom: '3%' }} >
            <FormLabel>Campaign Description</FormLabel>
                <InputGroup>
                    <Input type='text' value={input.desc} onChange={(e) => {
                        setInput({...input, desc: e.target.value})
                    }} />
                </InputGroup>
                {!errorDesc ? (
                    <FormHelperText >
                    Give a brief explaination of your campaign.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage >Description is required.</FormErrorMessage>
                )}
        </FormControl>
        <FormControl isInvalid={errorUrl} style={{ marginBottom: '3%' }} >
            <FormLabel>Image URL</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='https://' />
                    <Input type='url' value={input.url} onChange={(e) => {
                        setInput({...input, url: e.target.value})
                    }} />
                </InputGroup>
                {!errorUrl ? (
                    <FormHelperText >
                    An image that describes your campaign.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage >Image URL is required.</FormErrorMessage>
                )}
        </FormControl>
        <FormControl isInvalid={errorTarget} style={{ marginBottom: '3%' }} >
            <FormLabel>Target Amount</FormLabel>
                <InputGroup>
                    <Input type='number' value={input.targetAmt} onChange={(e) => {
                        setInput({...input, targetAmt: e.target.value})
                    }} />
                    <InputRightAddon children='ETH' />
                </InputGroup>
                {!errorTarget ? (
                    <FormHelperText >
                    The amount that you want to gather.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage >Target amount is required.</FormErrorMessage>
                )}
        </FormControl>
        <Button isActive={input.desc === null || input.minContri === null || input.name === null || input.targetAmt === null || input.url === null || errorDesc || errorMinContri || errorName || errorTarget || errorUrl} onClick={handleCreate} style={{ width: '100%', marginTop: '5%' }} colorScheme='orange' backgroundColor={'tomato'} leftIcon={<AiFillPlusCircle />} >Create</Button>
    </div>
  )
}

export default CreateCampaign