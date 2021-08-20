import ServiceCard from "../ServiceCard/ServiceCard"
import './Services.css'


export default function Services() {
    const services = [
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        },
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        },
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        },
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        },
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        },
        {
            name:'Hair Cut',
            original_price:200,
            discounted_price:150,
            image:"https://www.menshairstyletrends.com/wp-content/uploads/2017/08/cuttyfresh-high-fade-comb-over-haircut.jpg"
        }
    ]
    return (
        <div className='services-main'>
            {
                services.map(service=>(
                    <ServiceCard service={service}/>
                ))
            }
        </div>
    )
}
