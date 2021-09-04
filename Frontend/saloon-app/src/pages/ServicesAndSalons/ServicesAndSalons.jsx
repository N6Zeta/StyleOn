import './ServicesAndSalons.css'
import { useState,useEffect } from 'react'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import SalonCard from '../../components/SalonCard/SalonCard'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
// import { services } from '../../serviceData'
import { useSelector,useDispatch } from 'react-redux'
import { fetchServices } from '../../redux/appdata/appdata.actions'
import {  } from 'react-redux'

export default function ServicesAndSalons() {
    const dispatch = useDispatch()
    var services,salons
    const [searchValue,setSearchValue] = useState('')
    const [filteredServices,setFilteredServices] = useState(services)
    const [filteredSalons,setFilteredSalons] = useState(salons)


    function filteredItems(e){

        let search = e.target.value.toLowerCase()
        setSearchValue(search)
        setFilteredServices(services.filter(service=>(service.name.toLowerCase().includes(search)|| service.description.toLowerCase().includes(search))))

        setFilteredSalons(salons.filter(salon=>(salon.name.toLowerCase().includes(search )|| salon.description.toLowerCase().includes(search))))
       
    }
    

    useEffect(() => {
        dispatch(fetchServices())
        {services,salons} = useSelector(state=>state)
       
    }, [])


    return (
        <div className='services-and-salons-main'>
            <HeroComponent imageUrl='https://wallpaperaccess.com/full/1190372.jpg' title='Best In Market !!'>
               
                <input onChange={(e)=>filteredItems(e)} value={searchValue} type="text" placeholder='Search Here . . .' />
                <button>Search</button>
            </HeroComponent>
            {filteredServices.length?<h1>Services</h1>:null}

            <div className='items-grid'>
              {
                  filteredServices.length?filteredServices.map(service=>(
                      <ServiceCard card={service}/>
                  )):null

    
              }
             

            </div>
            {filteredSalons.length?<h1>Salon</h1>:null}
           

           <div className='items-grid'>
            {
                  filteredSalons.length>0?filteredSalons.map(salon=>(
                      <SalonCard imageUrl='https://i1.wp.com/cdn.whatsuplife.in/delhi/blog/2020/11/total.jpg' card={salon}/>
                  )):null

    
              }  
               
               
               </div>   
            
        </div>
    )
}
