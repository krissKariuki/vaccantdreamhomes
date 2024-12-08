
import {useState,useEffect} from "react"
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import ListingsCard from './ListingsCard'
import Footer from './Footer'

export default function Listings()
{
    const [data,setData]=useState([])

    const fetchData=(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(result=>{
            setData(result.listings)
        })
    }

    useEffect(()=>{
        fetchData('/public/db/data.json')
    },[])

    return(
        <>

        <section className='page listings'>
            <div className='listings-sect listings-details'>
            <div className='selfCentered filter'>
                <p className='filter-opt filter-type'>type <span className='chevron-down  material-icons'>chevron_right</span></p>
                <p className='filter-opt filter-category'>category <span className='chevron-down material-icons'>chevron_right</span></p>
                <p className='filter-opt filter-price'>price <span className='chevron-down material-icons'>chevron_right</span></p>
                <div className='filter-opt filter-selected'>
                    <span>nairobi</span>
                    <span>kes5,000 - kes50,000</span>
                    <span>apartments</span>
                    </div>
            </div>
        <Searchbar classname='searchbar selfCentered listings-searchbar'/>
        <div className='propertyListings'>
        {
                data.map((item,index)=>(
                    <ListingsCard key={index}listingsCardData={item}/>
                ))
        }
        </div>
        </div>

        <img src='/public/imgs/map.png'className='listings-sect listings-map'/>
        </section>
        <Footer/>
        </>
    )
}