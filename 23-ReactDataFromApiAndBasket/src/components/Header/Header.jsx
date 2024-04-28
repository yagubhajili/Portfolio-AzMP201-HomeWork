import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const Header = ({ basketCount, setBasketcount }) => {


    return (
        <header>
            <div className="container header">
                <h1>HAJİLİ</h1>
                <div className="icons">
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <p className='basketCounter'>{basketCount}</p>
                </div>
            </div>
        </header>
    )
}

export default Header