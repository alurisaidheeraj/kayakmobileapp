import React, { useState, useEffect } from "react";
import logo from "./logo.svg"
import { Link } from "react-router-dom"
import "./AirlineList.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setAirlineData } from '../store/airlines/action'
const AirlineList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch()
    const airlines = useSelector((state) => state.airlines.airlineData);

    useEffect(() => {
        if (airlines && airlines.length === 0) {
            dispatch(setAirlineData())
        }
    }, [airlines, dispatch])

    return (
        <div className="airlinelist">
            <div className="airlinelistLogo">
                <img className="kayak-header-logo" src={logo} alt="" />
            </div>
            <input className="airline-search-filter" type="text" placeholder="Airline filter..." onChange={e => { setSearchTerm(e.target.value) }} />
            <div className="airlinelistDetails">{airlines.filter((airline) => {
                if (searchTerm === "") {
                    return airline
                }
                else if (airline.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return airline
                }
                return false
            }).map((airline, index) => (
                <div className="items" key={index}>
                    <div className="aligned">
                        <img className="airline-image" src={"https://kayak.com" + airline.logoURL} alt="" />
                        <Link to={`${airline.code}`}> <span className="airlineName">{airline.name}</span></Link>
                    </div>
                </div>
            ))}
            </div>
        </div >
    )
}
export default AirlineList;