import './ServicesAndSalons.css'
import { useState } from 'react'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import SalonCard from '../../components/SalonCard/SalonCard'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { services } from '../../serviceData'

export default function ServicesAndSalons() {

    const [type,setType]=useState('services')

    return (
        <div className='services-and-salons-main'>
            <HeroComponent imageUrl='https://wallpaperaccess.com/full/1190372.jpg' title='Best In Market !!'>
                <select value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value='salons'>Salon</option>
                    <option value='services'>Service</option>
                </select>
                <input type="text" placeholder='Search Here . . .' />
                <button>Search</button>
            </HeroComponent>
            <h1>{type.toUpperCase()}</h1>

            <div className='items-grid'>
                {
                    type=='services'?services.map((service,index)=>(
                        <ServiceCard key={index} card={service}/>
                    )):[1,2,3,4,5,6,7,8,9].map((x,index)=>(
                        <SalonCard imageUrl='https://content3.jdmagicbox.com/comp/delhi/36/011pb012236/catalogue/looks-salon-delhi-fuuw5p2fy1.jpg?clr=3d2929' name='Looks Salon' address='Cannaught Place, Delhi'/>
                    ))
                }
            </div>


            
        </div>
    )
}
