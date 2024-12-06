import Navbar from './Navbar'
import Searchbar from './Searchbar'
import ListingsCard from './ListingsCard'

export default function Listings()
{
    return(
        <>
        <Navbar/>
        <section className='listings'>
            <div className='listings-sect listings-details'>
            <div className='selfCentered filter'>
                <p className='filter-opt filter-type'>type <i className='fa fa-chevron-down'></i></p>
                <p className='filter-opt filter-category'>category <i className='fa fa-chevron-down'></i></p>
                <p className='filter-opt filter-price'>price <i className='fa fa-chevron-down'></i></p>
                <div className='filter-opt filter-selected'>
                    <span>nairobi</span>
                    <span>kes20,000</span>
                    <span>apartments</span>
                    </div>
            </div>
        <Searchbar classname='searchbar selfCentered listings-searchbar'/>
        <div className='propertyListings'>
            <ListingsCard/>
            <ListingsCard/>
            <ListingsCard/>
            <ListingsCard/>
        </div>
        </div>

        <div className='listings-sect listings-map'></div>

        </section>
        </>
    )
}