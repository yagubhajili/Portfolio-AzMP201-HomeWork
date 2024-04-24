import React from 'react'
import './rightside.css'
import UpperText from './UpperText'
import Middle from './Middle'
import BottomArea from './BottomArea'

const RightSide = () => {
    return (
        <div className='righSideDiv'>
            <UpperText />
            <Middle />
            <BottomArea />
        </div>
    )
}

export default RightSide