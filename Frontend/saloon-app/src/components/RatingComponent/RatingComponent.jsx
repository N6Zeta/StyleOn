import { RatingView } from 'react-simple-star-rating'

export default function RatingComponent({value}) {
    return (
        <div>
            <RatingView ratingValue={value} />
        </div>
    )
}
