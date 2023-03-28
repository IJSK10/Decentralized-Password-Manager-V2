import React, { useState } from "react";
import Form from "./Form";
import Success from "./Success"
function Del1({contract})
{
    const [bool,setBool]=useState(false);
    const address=contract.signer.getAddress();
    const mainContract = contract.contract;
    async function delet(Web)
    {
        let abc=await mainContract.del(Web);
        console.log("done2");
        console.log(abc);
        console.log(typeof(abc));
        /*if (abc == "false")
        {
            setBool(true);
        }
        else
        {
            alert("Enter the Correct website name")
        }*/
        setBool(true);
    }
    console.log("123");
    console.log(bool);
    return  (
        <div>
            { bool ? <Success/> : <Form delet={delet} address={address} />}
        </div>
    );
}
export default Del1;