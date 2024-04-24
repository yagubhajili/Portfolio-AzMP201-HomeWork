import React from 'react'
import './uppertext.css'

const UpperText = () => {
    return (
        <div>
            <div className='highText'>
                <h2>
                    The Octocat
                </h2>
                <p>Joined 25 jan 2011</p>
            </div>
            <p className='userName'>@octocat</p>
            <p className='bio'>This profile has no bio</p>
        </div>

    )
}

export default UpperText