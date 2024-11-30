import {useState,useEffect} from "react"
import Category from "./Category"

export default function Body()
{
    //const [data,setData]=useState([])

    const data=[
        {"category":"apartments","items":
            [
                {"favourite":true,"location":"nairobi","specs":"2 bedroom","price":20000,"rating":4.6},
                {"favourite":true,"location":"karen","specs":"3 bedroom","price":24000,"rating":4.4},
                {"favourite":false,"location":"ngong","specs":"1 bedroom","price":15000,"rating":3.8},
                {"favourite":true,"location":"nairobi","specs":"4 bedroom","price":40000,"rating":4.8}
            ]
        },
        {"category":"lands","items":
            [
                {"favourite":true,"location":"kiserian","specs":"2 acre","price":2000000,"rating":3.9},
                {"favourite":false,"location":"karen","specs":"1/4 acre","price":1500000,"rating":4.2},
                {"favourite":false,"location":"ngong","specs":"1/2 acre","price":900000,"rating":4.0},
                {"favourite":false,"location":"kerarapon","specs":"1/8 acre","price":500000,"rating":4.3}
            ]
        },
        {
            "category":"products","items":
            [
                {"favourite":false,"location":"ngong","specs":"hp elitebook","price":35000,"rating":4.3},
                {"favourite":false,"location":"rongai","specs":"iphone 15 pro max","price":60000,"rating":4.1},
                {"favourite":false,"location":"dagoretti","specs":"camon camera","price":80000,"rating":3.8},
                {"favourite":false,"location":"uthiru","specs":"college bag","price":1200,"rating":3.4}
            ]
        }
    ]
    return(
        <div className='body'>
            {
                data.map((item,index)=>(
                    <Category key={index}categoryData={item}/>
                ))
            }
            <button className='seeMoreButton centered'>see more</button>
        </div>
    )
}