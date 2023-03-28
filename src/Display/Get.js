import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { decrypt } from 'eciesjs';
import { Buffer } from "buffer";
import parse from 'html-react-parser';
window.Buffer = window.Buffer || Buffer;
function Get({contract})
{
    const [cookies, setCookie] = useCookies(['user']);
    const [data,setData]= useState
    (

        {
            Username:"",
            Password:""
        }
    )
    const[da,setDa]=useState("");
    const mainContract = contract.contract;
    async function details()
    {
       
        /*const username=await mainContract.getname();
        const password=await mainContract.getpass();
        const privkey=cookies.Prkey;
        console.log(privkey);
        console.log("hi");
        const name1=new Uint8Array(Buffer.from(username, 'hex'));
        const pass1=new Uint8Array(Buffer.from(password, 'hex'));
        console.log("hi1");
        console.log("hi2");
        const abc=((decrypt(privkey,name1)).toString());
        const def=((decrypt(privkey,pass1)).toString());
        console.log(abc);
        setData({Username:abc,Password:def});*/
        var username,password;
        [username,password]=await mainContract.retrieve("");
        setData({Username:username,Password:password});
        console.log("Username:"+username);
        console.log("Password:"+password);
        var a=await mainContract.length();
        console.log("Length="+a);
        var z=[];
        var a1,a2;
        z=await mainContract.str();
        var m="";
        for (let i=0;i<a;i++)
        {
            console.log(z[i]);
            [a1,a2]=await mainContract.retrieve(z[i]);
            m=m+"<p>"+"Web:"+z[i]+"  Username:"+a1+"  Password:"+a2+"</p>";
        }
        setDa(m);

    }
    useEffect(()=>{details()},[])

    return(
        <div>
            <p>Username:{data.Username}</p>
            <p>Password:{data.Password}</p><br/>
            <div>{parse(da)}</div>
        </div>
    )
}
export default Get;