import {useState,useEffect} from "react"
import Category from "./Category"

export default function Body()
{
    const [data,setData]=useState([])

    const fetchData=(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(result=>{
            setData(result.homepage)
        })
    }

    useEffect(()=>{
        fetchData('/public/db/data.json')
    },[])
    return(
        <div className='body'>
            {
                data.map((item,index)=>(
                    <Category key={index}categoryData={item}/>
                ))
            }
            <button className='seeMoreButton selfCentered'>see more</button>
        </div>
    )
}