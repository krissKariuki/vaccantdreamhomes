import Card from './Card'
import SeeAllButton from './SeeAllButton'

export default function Category({categoryData})
{
    return(
        <div className='category-container'>
         <h3 className='category-label'>{categoryData.category}</h3>
         <SeeAllButton/>
        <div className='category-items'>
            {
                categoryData.items.map((item,index)=>(
                    <Card key={index} cardData={item}/>
                ))
            }
        </div>
        </div>
    )
}