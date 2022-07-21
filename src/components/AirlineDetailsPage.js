import React, { useEffect, useState } from "react";
import "./AirlineDetailsPage.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAirlineData } from "../store/airlines/action";

const AirlineDetailsPage = () => {
  const { code } = useParams();
  const [currentAirLine, setCurrentAirLine] = useState({});
  const [inputValue, setinputValue] = useState();
  const airlines = useSelector((state) => state.airlines.airlineData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  useEffect(() => {
    if (airlines && airlines.length === 0) {
      dispatch(setAirlineData());
    }
  }, [airlines, dispatch]);

  useEffect(() => {
    if (airlines && airlines.length > 0) {
      const airline = airlines.filter((r) => r.code === code);
      if (airline && airline.length > 0) {
        setCurrentAirLine(airline[0]);
      }
    }
  }, [code, airlines]);

  return (
    <div className="airline-details-page">
      <div className="airlineheaderLogo">
        <img className="kayak-header-logo" src={logo} alt="" />
      </div>
      <div className="airline-details">
        <div className="airline-details-back-to-list">
          <i className="arrow left"></i>
          <span className="airline-back-to-list">
            <Link to="/">Back to list</Link>
          </span>
        </div>
        <div className="airline-detail-list">
          <div className="airline-details-phone-site">
            <div className="airline-details-name">
              <p>
                {currentAirLine.name} ({currentAirLine.code})
              </p>
              <p className="airline-phoneNumber">{currentAirLine.phone}</p>
              <a href={currentAirLine.site} target="_blank" rel="noreferrer">
                {currentAirLine.site}
              </a>
            </div>
            <div className="airline-details-image">
              <img
                className="image"
                src={"https://kayak.com" + currentAirLine.logoURL}
                alt="airlineimage"
              />
            </div>
          </div>
          <div className="airline-check-flight-status">Check flight status</div>
          <input
            type="text"
            onChange={handleChange}
            value={inputValue || ""}
            placeholder="Enter Flight Number..."
          />
          <button
            type="button"
            disabled={!inputValue}
            onClick={() =>
              window.open(
                "https://www.kayak.com/tracker" +
                  "/" +
                  currentAirLine.code +
                  "-" +
                  inputValue +
                  "/" +
                  new Date().toISOString().slice(0, 10)
              )
            }
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirlineDetailsPage;
