import "./Home.css"
import { Navbar } from "../../components/Navbar/Navbar"
// import { Header } from "../../components/header/Header"
import { AboutUs } from "../../components/AboutUs/AboutUs"
import{Footer} from "../../components/footer/Footer"
import {FindUs} from "../../components/Findus/FindUs"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <AboutUs/>
      <FindUs/>
      <div>
      <Footer/>
      </div>
    </div> 
  )
}
