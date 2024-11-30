export default function Card({cardData})
{
    return(
        <div className='card'>
            <div className='card-image'>
                <i className='card-favourite'></i>
            </div>
            <div className='card-info'>
                <p className='card-location'>{cardData.location}</p>
                <p className='card-specs'>{cardData.specs}</p>
                <p className="card-rating">{cardData.rating} <i className='rateIcon'></i></p>
                <p className='card-price'>KES {cardData.price}</p>
            </div>
        </div>
    )
}