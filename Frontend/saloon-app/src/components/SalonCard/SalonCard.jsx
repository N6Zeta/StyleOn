import React from 'react'

export default function SalonCard({imageUrl,name,address}) {
    return (
        <div className='salon-main'>
            <img src={imageUrl} alt="Not Available" />
            <div className='salon-desription'>
                <p className='salon-name'>{name}</p>
                <p>{address}</p>
            </div>
        </div>
    )
}
