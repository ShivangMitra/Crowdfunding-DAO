import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'
import { BsMailbox2 } from 'react-icons/bs'

function Contact({ setPageState }) {

    const handleHome = () => {
        setPageState('home')
        }

  return (
    <div className='form-container' >
        <div onClick={handleHome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '15%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>
        <Heading style={{ marginBottom: '5%' }} >Contact Us</Heading>
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <AiFillMail color='tomato' fontSize='700%' width='40%' />
                <Text fontWeight='bold' fontSize='1.2rem' width='60%' >nisarg.39@nmims.edu.in
                                                                    keshav.sureka57@nmims.edu.in
                                                                    anshul.inani19@nmims.edu.in
                                                                    ramansh.bhatia05@nmims.edu.in</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <BsMailbox2 color='tomato' fontSize='700%' width='40%' />
                <Text fontWeight='bold' fontSize='1.2rem' width='60%' >Mukesh Patel School Of Technology Management, Mumbai.</Text>
            </div>
        </div>
    </div>
  )
}

export default Contact