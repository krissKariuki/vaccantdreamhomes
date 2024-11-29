export default function Card()
{
    return(
        <div className='card'>
            <div className='card-image'>
                <i className='card-favourite'></i>
            </div>
            <div className='card-info'>
                <p className='card-location'>Nairobi</p>
                <p className='card-specs'>2 Bedroom</p>
                <p className="card-rating">4.0 <i className='rateIcon'>i</i></p>
                <p className='card-price'>KES 20,000</p>
            </div>
        </div>
    )
}