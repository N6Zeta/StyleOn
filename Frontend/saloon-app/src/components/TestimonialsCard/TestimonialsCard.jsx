import './TestimonialsCard.css'

export default function TestimonialsCard({card:{name,image,description}}) {
    return (
        <div className='testimonial-main'>

            <div className="testimonial-header">
            <img src={image} alt="nothing available" />
            <h1 className='testimonial-user'>{name}</h1>
 

            </div>


            <div className='testimonial-content'>
            
            {description}

          
            </div>
            
            

        </div>
    )
}
