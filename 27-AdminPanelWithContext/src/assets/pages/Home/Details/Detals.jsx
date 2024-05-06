import React from 'react'
import { useParams } from 'react-router-dom'

const Detals = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>Detals</div>
    )
}

export default Detals