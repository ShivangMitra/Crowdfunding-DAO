import React from 'react'
import { Button, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'

function ViewRequest({ setPageState }) {
  return (
    <div className='requests-container' >
        <div onClick={() => {
            setPageState("campaign")
        }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '8%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>
        <Heading style={{ marginBottom: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >Withdrawal Requests <Text color='#0000006e' >3.12 ETH ($4231)</Text> </Heading>
        <Text fontSize='2xl' style={{ marginBottom: '5%' }} >Forest Conservation Fund</Text>

        <TableContainer>
            <Table variant='striped' colorScheme='orange'>
                <TableCaption>Found 4 Requests</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>DESCREPTION</Th>
                        <Th>AMOUNT</Th>
                        <Th>WALLET ADDRESS</Th>
                        <Th>APPROVAL COUNT</Th>
                        <Th>APPROVE</Th>
                        <Th>FINALIZE</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>0</Td>
                        <Td>Fire damage recovery.</Td>
                        <Td>0.11ETH</Td>
                        <Td>0x5d7...02b</Td>
                        <Td>1/3</Td>
                        <Td>
                            <Button colorScheme='orange' variant='outline' >Approve</Button>
                        </Td>
                        <Td>
                            <Button colorScheme='green' variant='outline' >Finalize</Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>1</Td>
                        <Td>Fire damage recovery.</Td>
                        <Td>0.11ETH</Td>
                        <Td>0x5d7...02b</Td>
                        <Td>1/3</Td>
                        <Td>
                            <Button colorScheme='orange' variant='outline' >Approve</Button>
                        </Td>
                        <Td>
                            <Button colorScheme='green' variant='outline' >Finalize</Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>Fire damage recovery.</Td>
                        <Td>0.11ETH</Td>
                        <Td>0x5d7...02b</Td>
                        <Td>1/3</Td>
                        <Td>
                            <Button colorScheme='orange' variant='outline' >Approve</Button>
                        </Td>
                        <Td>
                            <Button colorScheme='green' variant='outline' >Finalize</Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>Fire damage recovery.</Td>
                        <Td>0.11ETH</Td>
                        <Td>0x5d7...02b</Td>
                        <Td>1/3</Td>
                        <Td>
                            <Button colorScheme='orange' variant='outline' >Approve</Button>
                        </Td>
                        <Td>
                            <Button colorScheme='green' variant='outline' >Finalize</Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewRequest