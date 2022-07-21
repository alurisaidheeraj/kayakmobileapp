import React, { useEffect, useState } from "react";
import "./AirlineDetailsPage.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAirlineData } from "../store/airlines/action";

const AirlineDetailsPage = () => {
  const { code } = useParams();
  const [currentAirLine, setCurrentAirLine] = useState({});
  const airlines = useSelector((state) => state.airlines.airlineData);
  const dispatch = useDispatch();
  let textInput = React.createRef();

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
    <div className="airline-details">
      <i className="arrow left"></i>
      <span className="airline-back-to-list">
        <Link to="/">Back to list</Link>
      </span>
      <div className="airline-detail-list">
        <div className="airline-details-name">
          <p>
            {currentAirLine.name} ({currentAirLine.code})
          </p>
          <img
            className="image"
            src={"https://kayak.com" + currentAirLine.logoURL}
            style={{ fill: "#FFFFFF" }}
            alt=""
          />
        </div>
        <div className="airline-details-phone-website">
          <p className="airline-phoneNumber">{currentAirLine.phone}</p>
          <p className="airline-details-site">{currentAirLine.site}</p>
        </div>
        <div className="airline-check-flight-status">Check flight status</div>
        <input
          type="text"
          ref={textInput}
          placeholder="Enter Flight Number..."
        />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.kayak.com/tracker" +
                "/" +
                currentAirLine.code +
                "-" +
                textInput.current.value +
                "/" +
                new Date().toISOString().slice(0, 10)
            )
          }
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default AirlineDetailsPage;
