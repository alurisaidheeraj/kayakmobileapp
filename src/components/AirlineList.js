import React, { useState, useEffect } from "react";
import axios from 'axios'
import jsonpAdapter from "axios-jsonp"

const AirlineList = () => {
    const [airlineData, setAirlineData] = useState([]);
 useEffect(() =>{
    axios({
        url: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
        adapter: jsonpAdapter,
        callbackParamName: "jsonp" //callback by default
      }).then(res=> {
        setAirlineData(res.data)
        console.log(res)
    }).catch(err=> {
        console.log(err)
    })
 })
 console.log(airlineData)
 return (
    <div>
            {airlineData.map((airline, index) => (
                <div key={index}>
                    <img src={"https://kayak.com" + airline.logoURL} alt="" />
                     {airline.name}</div>
            ))}
    </div>
 )
}
export default AirlineList;