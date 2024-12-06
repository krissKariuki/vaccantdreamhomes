export default function Card({cardData})
{
    return(
        <div className='card'>
            <img className='card-image'src={cardData.img}/>
                <span className='material-icons card-favourite childCentered'>favorite_border</span>
            <div className='card-info'>
                <p className='card-location'>{cardData.location}</p>
                <p className='card-specs'>{cardData.specs}</p>
                <p className="card-rating">{cardData.rating} <span className='material-icons rateIcon'>star</span></p>
                <p className='card-price'>KES {cardData.price}</p>
            </div>
        </div>
    )
}