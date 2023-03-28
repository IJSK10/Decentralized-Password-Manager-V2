import React, { useRef } from "react";

function Form({delet})
{
    const web=useRef();
    console.log("hi");

    function xyz(){
        delet(web.current.value)
    }
    return(
        <div>
            <label>WebsiteName</label>
            <input ref={web} type="text" id="Web" placeholder="Website" /><br />
            <button onClick={xyz}>Submit</button>
        </div>
    );
}

export default Form;