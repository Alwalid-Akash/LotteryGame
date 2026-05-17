import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./ticket";

export default function Lottery({ n, winningsum }) {
  let [ticket, setTicket] = useState(genTicket(n));

  let isWinning = sum(ticket) === winningsum;

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card p-4 shadow text-center" style={{ width: "350px" }}>

        <h2>🎰 Lottery Game</h2>

        {/* Ticket */}
        <div className="mt-3">
          <Ticket ticket={ticket} />
        </div>

        {/* Button */}
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={buyTicket}
        >
          🎲 Buy Ticket
        </button>

        {/* Result */}
        <ul className="list-group mt-3">
          <li className="list-group-item">
            {isWinning ? "WIN 🎉" : "LOSE ❌"}
          </li>
        </ul>

      </div>

    </div>
  )
}