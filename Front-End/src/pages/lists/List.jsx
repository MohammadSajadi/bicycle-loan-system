import  './List.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import {Search} from "../../components/search/Search"


export const List = () => {
  const location = useLocation();
  const[destination,setDestination ] = useState (location.state.destination)
  // const[options,setOpetions ] = useState (location.state.options)
  const[date,setDate] = useState (location.state.date)
  const [openDate,setOpenDate]= useState (false)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className="listWrapper">
          <div className="listSearch">
          <h1 className='listTitle'>Search</h1>
          <div className="listItem">
            <label>Distination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="listItem">
            <label>Check-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                <DateRange onChange={(item)=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}/>
                )}
          </div>
          <div className="listItem">
            <div className='listOptionItem'>
              <span className='listOptionText'>
                  Price <small>per day</small>
              </span>
                  <input min={1} type="number" className='listOptionInput' />
            </div>
          </div>
          <button>Search</button>
          </div>
          <div className="listResult">
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
          </div>
        </div>
      </div>
    </div>
  )
}
