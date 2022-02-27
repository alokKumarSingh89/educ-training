import React from 'react'
import Data from "./data.json";

function Script() {
    return (

        <div className='posts'>
            {Data.map(post => {
                return(
                    <div key={post.id} className="post">
                    <h4>{post.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Script;