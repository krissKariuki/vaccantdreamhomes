import {useState,useEffect} from 'react'
import './styles/App.css'
import './styles/Homepage.css'
import './styles/Listings.css'
import './styles/Details.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Listings from './components/Listings'
import Details from './components/Details'

export default function App() {

  const [pageTab,setPageTab]=useState({tab:'tab home',page:'Homepage'})

  const homepage=pageTab.page==='Homepage'
  const listings=pageTab.page==='Listings'
  const details=pageTab.page=='Details'

  const handlePageSwitch=(tb,pg)=>setPageTab({tab:tb,page:pg})

  return (
    <>
    <Navbar tab={pageTab.tab} pageSwitch={handlePageSwitch}/>

    {homepage && <Homepage/>}
    {listings && <Listings/>}
    {details && <Details/>}
    </>
  )
}
