import React from "react";

function Success({data})
{
    return(
        <div>
            <p>Websitename:{data.web}</p>
            <p>Username:{data.name}</p>
            <p>Password:{data.password}</p>
        </div>
    );
}

export default Success;