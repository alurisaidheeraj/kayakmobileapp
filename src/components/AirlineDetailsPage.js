import React, { useEffect, useState } from 'react';
import "./AirlineDetailsPage.scss"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAirlineData } from '../store/airlines/action'
const AirlineDetailsPage = () => {
    const { code } = useParams();
    const [currentAirLine, setCurrentAirLine] = useState({})
    const airlines = useSelector((state) => state.airlines.airlineData);
    const dispatch = useDispatch()

    useEffect(() => {
        if (airlines && airlines.length === 0) {
            dispatch(setAirlineData())
        }
    }, [airlines, dispatch])


    useEffect(() => {
        if (airlines && airlines.length > 0) {
            const airline = airlines.filter(r => r.code === code)
            if (airline && airline.length > 0) {
                setCurrentAirLine(airline[0])
            }

        }

    }, [code, airlines])
    return (
        <div className="airline-details">
            <i className="arrow left"></i><span className="airline-back-to-list"><Link to="/">Back to list</Link></span>
            <div className="airline-detail-list">
             <div className="airline-details-name">
                <p>{currentAirLine.name} ({currentAirLine.code})</p>
                <img className='image' src={"https://kayak.com" + currentAirLine.logoURL} alt="" />
              </div>
                <p className="airline-phoneNumber">{currentAirLine.phone}</p>
                <a href="www.aa.com">{currentAirLine.site}</a>
            </div>
            <div className="airline-check-flight-status">
                <a href="https://www.kayak.com/tracker">Check flight status</a>
            </div>
            <input type="text" placeholder="Enter Flight Number..." />
            <button type="button">Check</button>


        </div>

    )
}

export default AirlineDetailsPage