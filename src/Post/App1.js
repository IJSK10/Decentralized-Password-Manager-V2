import React, { useState } from "react";
import {ethers } from "ethers";
import ABI from '../contract/ABI';
import ConnectMeta from "../Connect/Metamask";
import App2 from "./App2";


function App1()
{
    const contractAddress="0x70990Dbe2f06bABE985915CF017d332a788A6F48";
    const [connect, setConnect]=useState(false);
    const [address,setAddress]=useState("");
    const [contract, setContract]=useState(
        {
            signer:"",
            contract:""
        }
    );
    async function connection()
    {
    const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
    await provider.send("eth_requestAccounts",[]);
    const signer = provider.getSigner();
    const address= await signer.getAddress();
    const contract =new ethers.Contract(contractAddress,ABI,signer);
    if (address)
    {
        setAddress(address);
        setConnect(true);
        setContract({ contract: contract,signer: signer });
    }
    }
    return    (
        <div>
            {connect ? <App2 address={address} contract={contract} />: <ConnectMeta connect={connection} />}
        </div>
    );
   
}
export default App1;