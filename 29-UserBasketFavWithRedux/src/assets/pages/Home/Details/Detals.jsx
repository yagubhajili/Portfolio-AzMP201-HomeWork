import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById } from '../../../../services/provider'
import { endPoints } from '../../../../services/api'

const Detals = () => {
    const { id } = useParams()
    console.log(id)
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        getDataById(endPoints.products, id).then(product => {
            setProductDetail(product)
            console.log(product)
        })

    }, [id])



    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Product Detail
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    This is some information about the product.
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Picture</dt>
                        <img src={productDetail.image} width="100"
                            height="100" className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" />

                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Title</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {productDetail.title}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Price</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            ${productDetail.price}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Descriprion</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {productDetail.description}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Rate</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {productDetail.rating?.rate}*
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Count</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {productDetail.rating?.count}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

    )
}

export default Detals