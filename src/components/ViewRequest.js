import React, {useEffect, useState} from 'react'
import { Button, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'

function ViewRequest({ setPageState, campaign, currentAdd, signer, weiToEther }) {
    
    const [loading, setLoading] = useState(true)
    const [requestsData, setRequestsData] = useState([])

    useEffect(() => {

        const getRequestsData = async () => {
            try{

                const requestsData = []

                for(let i=0;i<campaign.reqLength;i++){
                    const res = await campaign.contract.requests(i)

                    console.log(res)
        
                    requestsData.push({
                        desc: res[0],
                        amt: res[1].toNumber(),
                        recipient: res[2],
                        completed: res[3],
                        approvalCount: res[4].toNumber(),
                        index: i
                    })
                }

                setRequestsData(requestsData)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }

        getRequestsData()
    }, [])

    function approveReq(id){
        const signedContract = campaign.contract.connect(signer)
        signedContract.approveRequest(id)
    }

    function finalizeReq(id){
        const signedContract = campaign.contract.connect(signer)
        signedContract.finalizeRequest(id)
    }
    

  return (
    <div className='requests-container' >
        <div onClick={() => {
            setPageState("campaign")
        }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', width: '8%' }} >
            <MdArrowBack color='tomato'/>
            <Text color='tomato' fontWeight='bold'>Go Back</Text>
        </div>
        <Heading style={{ marginBottom: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >Withdrawal Requests <Text color='#0000006e' >{weiToEther(campaign.balance)} ETH (${weiToEther(campaign.balance * 1660)})</Text> </Heading>
        <Text fontSize='2xl' style={{ marginBottom: '5%' }} >{campaign.title}</Text>

        <TableContainer>
            <Table variant='striped' colorScheme='orange'>
                <TableCaption>Found {requestsData.length} Requests</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>DESCREPTION</Th>
                        <Th>AMOUNT</Th>
                        <Th>WALLET ADDRESS</Th>
                        <Th>APPROVAL COUNT</Th>
                        <Th>APPROVE</Th>
                        {
                            campaign.manager.toUpperCase() === currentAdd.toUpperCase()
                            ?
                            (
                                <Th>FINALIZE</Th>
                            )
                            :
                            null
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        loading
                        ?
                        (
                            <Tr>
                                <Td>0</Td>
                                <Td>-</Td>
                                <Td>-ETH</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>
                                    <Button colorScheme='orange' variant='outline' >Approve</Button>
                                </Td>
                                <Td>
                                    <Button colorScheme='green' variant='outline' >Finalize</Button>
                                </Td>
                            </Tr>
                        )
                        :
                        requestsData.map((request, id) => (
                            <Tr key={id}>
                                <Td>{request.index}</Td>
                                <Td>{request.desc}</Td>
                                <Td>{`${weiToEther(request.amt)} ETH`}</Td>
                                <Td>{request.recipient.substring(0,5)+'...'+request.recipient.substring(request.recipient.length-4)}</Td>
                                <Td>{request.approvalCount}/{campaign.appCount}</Td>
                                <Td>
                                    <Button onClick={() => approveReq(id)} colorScheme='orange' variant='outline' >Approve</Button>
                                </Td>
                                {
                                    campaign.manager.toUpperCase() === currentAdd.toUpperCase()
                                    ?
                                    (
                                        <Td>
                                            <Button onClick={() => finalizeReq(id)} colorScheme='green' variant='outline' >Finalize</Button>
                                        </Td>
                                    )
                                    :
                                    null
                                }
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewRequest