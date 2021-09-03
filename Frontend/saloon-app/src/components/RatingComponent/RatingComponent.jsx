import { RatingView } from 'react-simple-star-rating'

export function RatingComponent({value, size, stars}) {
     let color_code = value >= 4 ? "green" : value <=3 && value >=2 ? "yellow" : "red";
     console.log("color", color_code)
    return (
        <RatingView ratingValue={value}  fillColor ={color_code} size={size}   stars={stars}/>
    )
}

        