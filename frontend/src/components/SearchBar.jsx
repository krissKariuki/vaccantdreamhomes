export default function Searchbar({classname})
{
    return(
        <div className={classname}>
            <input id='searchbar-input'type='search'/>
            <span className='material-icons childCentered'>search</span>
        </div>
    )
}