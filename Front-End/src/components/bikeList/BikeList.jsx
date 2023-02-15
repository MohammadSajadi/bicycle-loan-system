import './BikeList.css'
import findus from "../../assets/findus.png"
export const BikeList = () => {
  return (
    <div className='bikeList'>
        <div className='bikeItem'>
            <img className='bikeImg' src={findus} alt="bike" />
            <div className='bikeListTitle'>
               <h1>Bikes</h1>  
               <h2>b1</h2>
            </div>
           
        </div>
        <div className='bikeItem'>
            <img className='bikeImg' src={findus} alt="bike" />
            <div className='bikeListTitle'>
               <h1>Bikes</h1>  
               <h2>b2</h2>
            </div>
           
        </div>
        <div className='bikeItem'>
            <img className='bikeImg' src={findus} alt="bike" />
            <div className='bikeListTitle'>
               <h1>Bikes</h1>  
               <h2>b3</h2>
            </div>
           
        </div>
        <div className='bikeItem'>
            <img className='bikeImg' src={findus} alt="bike" />
            <div className='bikeListTitle'>
               <h1>Bikes</h1>  
               <h2>b4</h2>
            </div>
           
        </div>
        <div className='bikeItem'>
            <img className='bikeImg' src={findus} alt="bike" />
            <div className='bikeListTitle'>
               <h1>Bikes</h1>  
               <h2>b5</h2>
            </div>
           
        </div>

    </div>
  )
}
