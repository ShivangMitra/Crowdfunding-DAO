import { useEffect, useState, useRef } from 'react';
import { ethers } from 'ethers';
import { ChakraProvider, Divider, Heading } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import CardsContainer from './components/CardsContainer';
import Working from './components/Working';
import Footer from './components/Footer';
import CreateCampaign from './components/CreateCampaign';
import CampaignPage from './components/CampaignPage';
import Contact from './components/Contact';
import MyCampaigns from './components/MyCampaigns';
import ViewRequests from './components/ViewRequests';
import Alert from './components/Alert';
import { TbLayersLinked } from 'react-icons/tb'
import { BiShowAlt } from 'react-icons/bi'
import './App.css';
import CreateRequest from './components/CreateRequest';
import ViewRequest from './components/ViewRequest';

function App() {

  const [address, setAddress] = useState('')
  const [signer, setSigner] = useState()
  const [loading, setLoading] = useState(true)
  const [pageState, setPageState] = useState('home')
  const [totalEther, setTotalEther] = useState(0)

  const [campaignsLoading, setCampaignsLoading] = useState(true)
  const [campaignIndex, setCampaignIndex] = useState(0)

  const [metamask, setMetamask] = useState(true)

  const scrollTop = useRef()

  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "target",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        }
      ],
      "name": "createCampaign",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedCampaigns",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDeployedCampaigns",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const campaignAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "approveRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "createRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "finalizeRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "target",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "approversCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRequestsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSummary",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "manager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumContribution",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pool",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "requests",
      "outputs": [
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "complete",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "approvalCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const [campaignFactory, setCampaignFactory] = useState()

  const [allCampaigns, setAllCampaigns] = useState([])

  const [managerCampaigns, setManagerCampaigns] = useState([])

  const [donatedCampaigns, setDonatedCampaigns] = useState([])

  useEffect(() => {

    if(window.ethereum){

      setMetamask(true)

      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  
      const contract = new ethers.Contract('0x75206dfc555fa4865111b774ce9f79fdd76954c0', abi, provider)
      // const contract = new ethers.Contract('0x548e19de1168d7439bca9262364a0fdc62443e01', abi, provider)

      setCampaignFactory(contract)

      provider.send("eth_requestAccounts", [])
      .then((signerRes)=>{
        const signer = provider.getSigner();
        setSigner(signer);
        setAddress(signerRes[0]);
        setLoading(false)


        contract.getDeployedCampaigns().then((depCampaigns)=>{
  
          depCampaigns.map((add, index) => {
            const campaignContract = new ethers.Contract(add, campaignAbi, provider)

            
            
            campaignContract.getSummary().then((res) => {
              let approver, campaignsEther = 0;
              
              campaignContract.approvers(signerRes[0]).then(approval => {
                approver = approval

                let data = {
                  minContri: weiToEther(res[0]),
                  balance: weiToEther(res[1]),
                  reqLength: res[2].toNumber(),
                  appCount: res[3].toNumber(),
                  manager: res[4],
                  title: res[5],
                  desc: res[6],
                  url: res[7],
                  targetAmt: weiToEther(res[8]),
                  address: add,
                  contract: campaignContract,
                  index: index
                }

                campaignsEther += data.balance
                
                if(!allCampaigns.find(camp => camp.address === data.address)){
                  allCampaigns.push(data)
                }
  
                if(!managerCampaigns.find(camp => camp.address === data.address) && (data.manager.toUpperCase() === signerRes[0].toUpperCase())){
                  managerCampaigns.push(data)
                }
  
                if(!donatedCampaigns.find(camp => camp.address === data.address) && approver){
                  donatedCampaigns.push(data)
                }
                
                setTotalEther(campaignsEther)
                setAllCampaigns([...allCampaigns])
                setManagerCampaigns([...managerCampaigns])
              })
              .catch(err=>console.log(err))
            })
            .catch(err => {
              console.log(err)
            })
          })
          
          setCampaignsLoading(false)
  
        })
        .catch(err => console.log(err))

      })
      .catch(err=>{console.log(err)});
    }
    else{
      setMetamask(false)
    }
  }, []);

  useEffect(() => {
    scrollTop.current.scrollTo(0, 0)
  }, [pageState])
  

  const etherToWei = amount => {
    return ethers.utils.parseUnits(amount, "ether")
  }

  const weiToEther = amount => {
    return ethers.utils.formatEther(amount)
  }
  

  return (
    <ChakraProvider>
      <Alert metamask={metamask} />
      <div className={pageState === 'home' ? 'background' : 'background-two'} ></div>
      <div className='scroll-container' ref={scrollTop} >
        <Navbar address={address} loading={loading} metamask={metamask} pageState={pageState} setPageState={setPageState} />
        <Divider/>
        {
          pageState==='createCampaign'
          ?
          (
            <CreateCampaign setPageState={setPageState} campaignFactory={campaignFactory} signer={signer} etherToWei={etherToWei} />
          )
          :
          null
        }
        {
          pageState==='home'
          ?
          (
            <>
            <div className='design-header' >
              <Header setPageState={setPageState} />
              <div className='design' ></div>
            </div>
            <Stats allCampaigns={allCampaigns} totalEther={totalEther} />
            <Heading fontSize='4xl' color={'white'} style={{ width:'23%', margin: '5%', marginBottom: '2%', marginTop: '8%' , display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} ><TbLayersLinked/> Active Campaigns</Heading>
            <CardsContainer loading={campaignsLoading} setPageState={setPageState} allCampaigns={allCampaigns} setCampaignIndex={setCampaignIndex} />
            <Heading id='howitworks' fontSize='4xl' color={'white'} style={{ width:'21%', margin: '5%', marginBottom: '2%', marginTop: '8%' , display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} ><BiShowAlt/> How FTC Works</Heading>
            <Working/>
            </>
          )
          :
          null
        }
        {
          pageState === 'campaign'
          ?
          (
            <CampaignPage setPageState={setPageState} campaign={allCampaigns.find(camp => camp.index === campaignIndex)} currentAdd={address} signer={signer} etherToWei={etherToWei} />
          )
          :
          null
        }
        {
          pageState === 'createRequest'
          ?
          (
            <CreateRequest setPageState={setPageState} campaign={allCampaigns.find(camp => camp.index === campaignIndex)} signer={signer} etherToWei={etherToWei} />
          )
          :
          null
        }
        {
          pageState === 'viewRequest'
          ?
          (
            <ViewRequest setPageState={setPageState} campaign={allCampaigns.find(camp => camp.index === campaignIndex)} currentAdd={address} signer={signer} weiToEther={weiToEther} />
          )
          :
          null
        }
        {
          pageState === 'contact'
          ?
          (
            <Contact setPageState={setPageState} />
          )
          :
          null
        }
        {
          pageState === 'myCampaigns'
          ?
          (
            <MyCampaigns setPageState={setPageState} managerCampaigns={managerCampaigns} setCampaignIndex={setCampaignIndex} />
          )
          :
          null
        }
        {
          pageState === 'viewRequests'
          ?
          (
            <ViewRequests setPageState={setPageState} donatedCampaigns={donatedCampaigns} setCampaignIndex={setCampaignIndex} />
          )
          :
          null
        }
        <Footer setPageState={setPageState} />
      </div>
    </ChakraProvider>
  );
}

export default App;
