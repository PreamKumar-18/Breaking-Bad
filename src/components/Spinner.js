import spinner from "../images/spinner.gif"

import React from 'react'

function Spinner() {
    return (
        <div>
            <img src={spinner} alt="loading" style={{ width: "200px", margin: "auto", display: "block", }} />
        </div>
    )
}

export default Spinner
