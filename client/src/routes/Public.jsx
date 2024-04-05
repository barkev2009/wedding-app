import React from 'react'

const Public = ({ link }) => {
    return (
        <div>
            {JSON.stringify(link, null, 2)}
        </div>
    )
}

export default Public