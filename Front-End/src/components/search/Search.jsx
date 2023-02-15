import  './search.css'
import findus from "../../assets/findus.png"
export const Search = () => {
  return (
    <div className='search'>
        <img src={findus} alt="" className='searchImg' />
        <div className='searchDesc'>
            <h1 className='searchTitle'> Montreal Downtown</h1>
            <span className='searchFeatures'> Nice Bicycle</span>
            <span className='searchCancel'> free cancelation</span>
        </div>
        <div className='searchDetail'>
            <div className='searchDetailText'>
                <span className='searchPrice'>$5</span>
                <span className='searchTax'>Taxes Includes</span>
                <button className='searchAvailBtn' > see availibilty</button>
            </div>
        </div>
    </div>
  )
}
