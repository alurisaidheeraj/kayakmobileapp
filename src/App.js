import React, { useState, useEffect } from "react";
import AirlineList from './components/AirlineList'
import "./App.scss"


let axios = require("axios");
let jsonpAdapter = require("axios-jsonp");

export default function App() {
  return (
    <AirlineList />
  )
}


