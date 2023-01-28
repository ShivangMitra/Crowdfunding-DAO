import { useEffect, useState } from 'react';
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

  const [abi, setabi] = useState([
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str_in",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "str_out",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ])

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const contract = new ethers.Contract('0xf4395decdb4e1f0c3f0cb173cb83e68de631374c', abi, provider)

    contract.str_out().then((res)=>{
      console.log(res)
    })

    provider.send("eth_requestAccounts", [])
    .then((res)=>{
      const signer = provider.getSigner();
      setSigner(signer);
      setAddress(res[0]);
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);
  

  return (
    <ChakraProvider>
      <div className={pageState === 'home' ? 'background' : 'background-two'} ></div>
      <div className='scroll-container' >
        <Navbar address={address} loading={loading} pageState={pageState} setPageState={setPageState} />
        <Divider/>
        {
          pageState==='createCampaign'
          ?
          (
            <CreateCampaign setPageState={setPageState} />
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
            <Stats/>
            <Heading fontSize='4xl' color={'white'} style={{ width:'23%', margin: '5%', marginBottom: '2%', marginTop: '8%' , display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} ><TbLayersLinked/> Active Campaigns</Heading>
            <CardsContainer setPageState={setPageState} />
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
            <CampaignPage setPageState={setPageState} />
          )
          :
          null
        }
        {
          pageState === 'createRequest'
          ?
          (
            <CreateRequest setPageState={setPageState} />
          )
          :
          null
        }
        {
          pageState === 'viewRequest'
          ?
          (
            <ViewRequest setPageState={setPageState} />
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
            <MyCampaigns setPageState={setPageState} />
          )
          :
          null
        }
        {
          pageState === 'viewRequests'
          ?
          (
            <ViewRequests setPageState={setPageState} />
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
