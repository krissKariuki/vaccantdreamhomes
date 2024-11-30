import Card from './Card'
import SeeAllButton from './SeeAllButton'

export default function Category()
{
    return(
        <div className='category-container'>
         <h3 className='category-label'>category</h3>
         <SeeAllButton/>
        <div className='category-items'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    )
}