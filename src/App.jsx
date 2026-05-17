import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Lottery from './components/lottery'
import HowToPlay from "./components/HowToPlay";
import { Routes, Route } from "react-router-dom";
import TicketNum from './components/ticketnum';
function App() {
  return (
    <>
      <Header />
      <Lottery n={3} winningsum={15} />
      <Footer />
    </>
  )
}

export default App