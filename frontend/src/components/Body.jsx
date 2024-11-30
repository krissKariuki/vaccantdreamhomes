import Category from "./Category"

export default function Body()
{
    return(
        <div className='body'>
            <Category/>
            <Category/>
            <Category/>
            <button className='seeMoreButton centered'>see more</button>
        </div>
    )
}