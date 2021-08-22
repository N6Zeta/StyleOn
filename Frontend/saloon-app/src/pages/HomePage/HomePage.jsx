import './HomePage.css'
import { useRef } from "react";
import Carousel from '../../components/Carousel/Carousel';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import { products } from "../../productData";
import {services} from '../../serviceData'
import ProductCard from "../../components/ProductCard/ProductCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TestimonialsCard from '../../components/TestimonialsCard/TestimonialsCard';
import { testimonials } from '../../TestimonialData';


export default function HomePage() {

    const serviceContainer = useRef()
    const productContainer = useRef()
    const testimonialContainer=useRef()


    
    
    return (
        <div className='homepage-div' >

            <HeroComponent imageUrl='https://saloncollage.com/wp-content/uploads/2015/01/salon_collage_award_winning_hair_salon_interior_sherway_gardens-1920x820.jpg' title='Best Services'>
                <button>View Services</button>
            </HeroComponent>
            <Carousel items={services} CarouselComponent={ServiceCard} itemContainer={serviceContainer}/>
            <Carousel items={products} CarouselComponent={ProductCard} itemContainer={productContainer}/>
            <Carousel items={testimonials} CarouselComponent={TestimonialsCard} itemContainer={testimonialContainer} />
            

        </div>
    )
}
