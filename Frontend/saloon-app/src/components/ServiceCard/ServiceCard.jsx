import './ServiceCard.css'

export default function ServiceCard({service:{image,name,original_price,discounted_price}}) {
    return (
        <div className='service-main'>
            <img src={image} alt="nothing available" />
            <div className='service-description'>
            <p>{name}</p>

                <div>
                <span className="original-price">Rs {original_price}</span>
                <span className='discounted-price'>Rs {discounted_price}</span>
                </div>

            <p>{(original_price-discounted_price)/original_price*100}% off</p>

            </div>
            

        </div>
    )
}
