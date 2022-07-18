import React  from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AirlineList from './components/AirlineList'
import "./App.scss"
import AirlineDetailsPage from './components/AirlineDetailsPage'


const App = () => {
  return (
    <div className="App"><Router>
    <Routes>
    <Route path = "/" element={<AirlineList />} />
    <Route path = "/airlinedetails" element={<AirlineDetailsPage/>} />
    </Routes>
  </Router>
  </div>
    
  )
}

export default App

