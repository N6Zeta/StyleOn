import './ServiceCard.css'

export default function ServiceCard({card:{image,name,original_price,discounted_price}}) {
    return (
        <div className='service-main'>
            <img src={image} alt="nothing available" />
            <div className='service-description'>
            <p className='service-name'>{name}</p>

                <div className='price-div'>
                <span className="original-price">Rs {original_price}</span>
                <span className='discounted-price'>Rs {discounted_price}</span>
                </div>

            <p className='discount-value'>{(original_price-discounted_price)/original_price*100}% off</p>
            <button className="book-now-button">Book Now</button>
            </div>
            

        </div>
    )
}
