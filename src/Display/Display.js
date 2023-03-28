import React, { useState } from "react";
import {ethers} from "ethers";

import ConnectMeta from "../Connect/Metamask";
import Get from "./Get";
import ABI from '../contract/ABI';
function Display()
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
         console.log(signer)
         const address= await signer.getAddress();
         const contract =new ethers.Contract(contractAddress,ABI,signer);
    if (address)
    {
        setAddress(address);
        setConnect(true);
        setContract({ contract: contract,signer: signer });
        console.log("Display");
    }
    }
    return    (
        <div>
            {connect ? <Get address={address} contract={contract} />: <ConnectMeta connect={connection} />}
        </div>
    );
   
}
export default Display;