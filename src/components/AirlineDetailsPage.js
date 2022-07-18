import "./AirlineDetailsPage.scss"
import {Link} from "react-router-dom"

const AirlineDetailsPage = () => {
 return (
    <div className="airline-details">
        <i className="arrow left"></i><span className="airline-back-to-list"><Link to="/">Back to list</Link></span> 
        <div className="airline-detail-list">
        <p className="airline-details-name"> AMERICAN AIRLINES (AA)</p>
        {/* <img src={"https://kayak.com" + airline.logoURL} alt="" /> */}
        <p className="airline-phoneNumber"> +1 800 433 7300</p>
            <a href="www.aa.com">www.aa.com</a>
        </div>
        <div className="airline-check-flight-status">
            <a  href="https://www.kayak.com/tracker">Check flight status</a>
        </div>
         <input type="text" placeholder="Enter Flight Number..." />
         <button type="button">Check</button>
        
     
    </div>
   
 )
}

export default AirlineDetailsPage