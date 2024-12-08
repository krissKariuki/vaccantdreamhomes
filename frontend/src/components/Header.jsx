import Navbar from './Navbar'
import Slogan from './Slogan'
import Searchbar from './Searchbar'

export default function(){
    return(
        <div className='header'>
        <Slogan/>
        <Searchbar classname='searchbar selfCentered'/>
        </div>
    )
}