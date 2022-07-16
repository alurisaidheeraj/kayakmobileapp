import React, { useState, useEffect } from "react";
import axios from 'axios'
import jsonpAdapter from "axios-jsonp"
import logo from "./logo.svg"

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
 })
 return (
    <div>
     <div className="navbar">
        <img src={logo} alt="" />
      </div>
        <input type="text" placeholder="Airline filter" onChange={e => {setSearchTerm(e.target.value)}}/>
            {airlineData.filter((airline) => {
                if(searchTerm === "") {
                    return airline
                }
                else if (airline.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return airline
                }
                return false
            }).map((airline, index) => (
                <div key={index}>
                    <img src={"https://kayak.com" + airline.logoURL} alt="" />
                     {airline.name}</div>
            ))}
    </div>
 )
}
export default AirlineList;