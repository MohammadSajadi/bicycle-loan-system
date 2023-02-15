import "./bike.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import welcome from "../../assets/welcome.png";
export const Bike = () => {
  const photos = [{welcome},{welcome}]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="bikeContainer">
        <div className="bikeWrapper">
          <button className="bookNow">Reserve / Book Now!</button>
          <h1 className="bikeTitle">Nice Bicycle</h1>
          <div className="bikeAddress">
            <span>west motreal QC</span>
          </div>
          <span className="bikeDetail"> very good condition</span>
          <span className="bikePrice"> $5 perday</span>
          <div className="bikeImg">
           {photos.map(photo=>(
            <div className="bikeImgWrapper">
              <img src={photo.src} alt="" className="bikeImg" />
              </div>
           ))}
            
          </div>
          <div className="bikeDetails">
            <div className="bikeDetailTexts">
              <h1 className="bikeTitle">Rent your choice of bicycle here!</h1>
              <p className="bikeDesc">
              In spring, summer or fall, biking is one of the best ways to
                  explore Montréal – and it's easy to rent a bike in the city if
                  you don't have your own
              </p>
            </div>
            <div className="bikeDetailPrice">
              <h1>Perfect condition to rent</h1>
              <span> Located in the heart of Montreal Downtown</span>
              <h2><b>$5 </b> (1 day)</h2>
              <button>Reserve / Book Now</button>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};
