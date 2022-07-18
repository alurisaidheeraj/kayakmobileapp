import React, { useState, useEffect } from "react";
import axios from 'axios'
import jsonpAdapter from "axios-jsonp"
import logo from "./logo.svg"
import {Link} from "react-router-dom"
import "./AirlineList.scss"

const AirlineList = () => {
    const [airlineData, setAirlineData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
 useEffect(() =>{
    axios({
        url: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
        adapter: jsonpAdapter,
        callbackParamName: "jsonp" //callback by default
      }).then(res=> {
        setAirlineData(res.data)
    }).catch(err=> {
        console.log(err)
    })
 }, [])

 return (
    <div className="airlinelist">
     <div className="airlinelistLogo">
        <img className="kayak-header-logo" src={logo} alt="" />
      </div>
        <input className= "airline-search-filter" type="text" placeholder="Airline filter..." onChange={e => {setSearchTerm(e.target.value)}}/>
        <div className="airlinelistDetails">{airlineData.filter((airline) => {
                if(searchTerm === "") {
                    return airline
                }
                else if (airline.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return airline
                }
                return false
            }).map((airline, index) => (
                <div className="items"key={index}>
                <div className="aligned">
                    <img className="airline-image"src={"https://kayak.com" + airline.logoURL} alt="" />
                    <Link to="/airlinedetails"> <span className="airlineName">{airline.name}</span></Link>
                </div>
                </div>
            ))}
            </div>      
    </div>
 )
}
export default AirlineList;