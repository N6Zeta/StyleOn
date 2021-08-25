import './ProductCard.css'

export default function ProductCard({card}) {
    const {image,name,original_price,discounted_price}=card
    return (
        <div className='product-main'>
              <img src={image} alt="nothing available" />
            <div className='product-description'>
            <p className='product-name'>{name}</p>

                <div className='price-div'>
                <span className="original-price">Rs {original_price}</span>
                <span className='discounted-price'>Rs {discounted_price}</span>
                </div>

            <p className='discount-value'>{(original_price-discounted_price)/original_price*100}% off</p>
            <button className='add-to-cart-button'>Add to Cart</button>

            </div>
        </div>
    )
}
