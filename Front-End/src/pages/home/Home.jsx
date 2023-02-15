import "./Home.css"
import { Navbar } from "../../components/Navbar/Navbar"
import { Header } from "../../components/header/Header"
import { Locations } from "../../components/locations/Locations"
import { BikeList } from "../../components/bikeList/BikeList"
import{Footer} from "../../components/footer/Footer"
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Locations/>
      <h1 className="bikeTitle"> Brows your bicycle!</h1>
      <BikeList/>
      <Footer/>
      </div>
    </div> 
  )
}
