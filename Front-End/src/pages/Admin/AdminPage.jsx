import { AdminRegister } from "../../components/AdminRegister/AdminRegister"
import { AdminSignIn} from "../../components/AdminSignIn/AdminSignIn"
import { Navbar } from "../../components/Navbar/Navbar"
import { Locations } from "../../components/locations/Locations"
import { Bikes } from "../../components/bikes/Bikes"
import{Footer} from "../../components/footer/Footer"

export const AdminPage = () => {
  return (
    <div>
      <Navbar/>
      <AdminRegister/>
      <AdminSignIn/>
      <div className="homeContainer">
      <Bikes/> 
      <Locations/>
      <Footer/>
      </div>
    </div> 
  )
}
