import React, { useState } from "react";
import Form from "./Form";
import Success from "./Success"
import { useCookies } from "react-cookie";
import { encrypt } from "eciesjs";
import { Buffer } from "buffer";
function App2({contract})
{
    const [cookies, setCookie] = useCookies(['user']);
    const [bool,setBool]=useState(false);
    const [data, setData]=useState(
        {
            web:"",
            name:"",
            password:""
        }
    );
    const address=contract.signer.getAddress();
    const mainContract = contract.contract;
    async function store(Web,Username,Password)
    {
        /*const n=Buffer.from(Username,"utf-8");
        const p=Buffer.from(Password,"utf-8");
        console.log("h1");
        console.log(cookies.Pubkey);
        const pubkey=cookies.Pubkey;
        console.log(cookies.Prkey);
        console.log("h2");
        console.log(n)
        console.log(p)
        const name = encrypt(pubkey,n);
        const pass = encrypt(pubkey,p);
        console.log(name);
        console.log(pass);
        console.log("done1");
        const abc=Buffer.from(name).toString('hex');
        const def=Buffer.from(pass).toString('hex');
        console.log(abc);*/
        await mainContract.insert(Web,Username,Password);
        console.log("done2");
        setBool(true);
        setData(
            {
                web:Web,
                name:Username,
                password:Password
            }
        )
        
    }
    console.log("123");
    console.log(bool);
    return  (
        <div>
            { bool ? <Success data={data}/> : <Form store={store} address={address} />}
        </div>
    );
}
export default App2;