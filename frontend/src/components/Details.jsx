import {useState,useEffect} from 'react'
import Navbar from './Navbar'
import ListingsCard from './ListingsCard'
import ReviewCard from './ReviewCard'
import Footer from './Footer'

export default function Details()
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
        <section className='details'>
            <div className='details-imageCollection'>
                <img src='/public/imgs/apartment-1.avif'/>
                <img src='/public/imgs/apartment-2.avif'/>
                <img src='/public/imgs/apartment-3.avif'/>
                <img src='/public/imgs/apartment-4.avif'/>
                <img src='/public/imgs/apartment-5.avif'/>
                <img src='/public/imgs/apartment-6.avif'/>
               
            </div>
            <div className='details-map'>
                <button className='selfCentered bookNow'>book now</button>
            </div>
            <div className='details-navbar'>
                <p className='details-info details-descriptionLabel'>description</p>
                <p className='details-info details-reviewsLabel'>reviews</p>
            </div>
            <div className='details-reviews'>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
            <h3 className='details-label'>properties like this</h3>
            <div className='details-similarProperties'>
            {
                data.map((item,index)=>(
                    <ListingsCard key={index}listingsCardData={item}/>
                ))
            }
            </div>
            <Footer/>
        </section>
        </>
    )
}