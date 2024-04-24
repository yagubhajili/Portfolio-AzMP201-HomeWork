import React from 'react'
import './mainbody.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MainBody = () => {
    return (
        <div className='container mainBody'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default MainBody