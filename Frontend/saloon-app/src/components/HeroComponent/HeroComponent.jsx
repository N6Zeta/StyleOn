import './HeroComponent.css'

export default function HeroComponent({title,imageUrl,children}) {

    // Hero Header
    // Input tags

    return (
        <div style={{backgroundImage:`url(${imageUrl})`}} className="hero-main">
            <h1 className='hero-header'>{title}</h1>
            <div className='hero-inputs'>
            {
            children
            }
            </div>
        </div>
    )
}
