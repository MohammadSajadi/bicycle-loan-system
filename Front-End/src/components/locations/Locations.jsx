import './locations.css'
import welcome from "../../assets/welcome.png";


export const Locations = () => {
  return (
    <div className='locations'>
      <div className='locationsItem'>
        <img className='locationsImg' src={welcome} alt="welcome" />
        <div className='locationsTitle'>
          <h1>location 1</h1>
          <h3>123 west montreal QC</h3>
        </div>
      </div>
      <div className='locationsItem'>
        <img className='locationsImg' src={welcome} alt="welcome" />
        <div className='locationsTitle'>
          <h1>location 2</h1>
          <h3>123 west montreal QC</h3>
        </div>
      </div>
      <div className='locationsItem'>
        <img className='locationsImg' src={welcome} alt="welcome" />
        <div className='locationsTitle'>
          <h1>location 3</h1>
          <h3>123 west montreal QC</h3>
        </div>
      </div>
      <div className='locationsItem'>
        <img className='locationsImg' src={welcome} alt="welcome" />
        <div className='locationsTitle'>
          <h1>location 4</h1>
          <h3>123 west montreal QC</h3>
        </div>
      </div>
    </div>
  )
}
