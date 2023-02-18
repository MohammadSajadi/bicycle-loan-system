import {
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { SubHeading } from "../SubHeading/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import images from "../../../src/assets/findus.png";


export const Header = () => {
  
  return (
    <div className="header">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBicycle} />
            <span>Rent with us</span>
          
        <SubHeading title="Pedal to the freedom of mobility." />
        <h1 className="app-header-h1">The flexible, fun way to travel.</h1>
        </div>
        <div className='aboutImg'>
      <img src={images} alt="findus" />
    </div>

     </div>
     
        
  );
  
};

        