import React from 'react'
import HeroComponent from '../../components/HeroComponent/HeroComponent'

export default function ProductMarketPlace() {
    return (
        <div className='product-marketplace-main'>
            <HeroComponent imageUrl='https://wallpaperaccess.com/full/1190372.jpg' title='Top Brands, Luxury Products'>
                <input type="text" placeholder='Search for Products . . .'/>
                <button>Search</button>

            </HeroComponent>
            <h1>Product page</h1>
        </div>
    )
}
