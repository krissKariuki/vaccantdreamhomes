import Logo from './Logo'
import Dp from './Dp'


export default function Navbar({tab,pageSwitch})
{

    const inactiveTab={
        color:'inherit',
        background:'inherit'
    }
    const activeTab={
        color:'var(--primary)',
        background:'var(--accent)'
    }

    return(
        <div className="navbar">
            <Logo/>
            <h4 className='tab home' style={tab!=='tab home'?inactiveTab:activeTab} onClick={()=>pageSwitch('tab home','Homepage')}>home</h4>
            <h4 className='tab rent' style={tab!=='tab rent'?inactiveTab:activeTab} onClick={()=>pageSwitch('tab rent','Listings')}>rent</h4>
            <h4 className='tab buy' style={tab!=='tab buy'?inactiveTab:activeTab} onClick={()=>pageSwitch('tab buy','Listings')}>buy</h4>
            <h4 className='tab sell' style={tab!=='tab sell'?inactiveTab:activeTab} onClick={()=>pageSwitch('tab sell','Listings')}>sell</h4>
            <h4 className='tab shop' style={tab!=='tab shop'?inactiveTab:activeTab} onClick={()=>pageSwitch('tab shop','Homepage')}>shop</h4>
            <Dp/>
        </div>
    )
}