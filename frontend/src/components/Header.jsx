import Navbar from './Navbar'
import Slogan from './Slogan'
import SearchBar from './SearchBar'

export default function(){
    return(
        <div className='header'>
        <Navbar/>
        <Slogan/>
        <SearchBar/>
        </div>
    )
}