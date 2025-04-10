import React from "react"
import { Outlet } from "react-router-dom"
import "./App.css";
import RealTimeChart from './components/RealTimeChart';

function App() {
  return (
    <div className="app">
      <RealTimeChart />
      <Outlet />
    </div>
  )
}

export default App;
