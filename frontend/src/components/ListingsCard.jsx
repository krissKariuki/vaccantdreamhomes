export default function ListingsCard({listingsCardData})
{
    return(
        <div className='listingsCard'>
            <img src={listingsCardData.img}className='listingsCard-img' />
            <div className='listingsCard-info'>

            <span className='material-icons listingsCard-favourite childCentered'>favorite_border</span>
            <span className='location-icon material-icons'>location_on</span>
                <p className='listingsCard-location'>{listingsCardData.location}</p>
                <p className='listingsCard-specs'>
                    {
                        listingsCardData.specs.map((spec,id)=>(
                            <span key={id} className='specs'>{spec}</span>
                        ))
                    }
                </p>
                <p className='selfCentered listingsCard-price'>kes {listingsCardData.price.toLocaleString('en-us')}</p>
                <p className='selfCentered childCentered listingsCard-contact'>contact seller</p>
            </div>
        </div>
    )
}