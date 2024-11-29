import Logo from './Logo'
import Dp from './Dp'


export default function Navbar()
{
    return(
        <div className="navbar">
            <Logo/>
            <h4 className='tab home'>home</h4>
            <h4 className='tab rent'>rent</h4>
            <h4 className='tab buy'>buy</h4>
            <h4 className='tab sell'>sell</h4>
            <h4 className='tab shop'>shop</h4>
            <Dp/>
        </div>
    )
}