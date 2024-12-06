export default function ListingsCard({listingsCardData})
{
    return(
        <div className='listingsCard'>
            <img className='listingsCard-img' />
            <div className='listingsCard-info'>
                <p className='listingsCard-location'><i className='fa fa-location'></i>nairobi</p>
                <p className='listingsCard-specs'>
                    <span>4 bedroom</span>
                    <span>surveillance</span>
                    <span>parking</span>
                </p>
                <p className='selfCentered childCentered listingsCard-contact'>contact seller</p>
            </div>
        </div>
    )
}