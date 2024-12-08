export default function ReviewCard()
{
    return(
        <div className='reviewCard'>
            <div className='reviewCard-dp'></div>
            <p className='reviewCard-message'>Cozy one-bedroom with lots of natural light and modern appliances. Quiet neighborhood, close to shops and transport. Great value for the price!</p>
            <p className='reviewCardRating'>
            <span className='star material-icons'>star</span>
            <span className='star material-icons'>star</span>
            <span className='star material-icons'>star</span>
            <p className='reviewCard-rating'>4.5</p>
            </p>
        </div>
    )
}