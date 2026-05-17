import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}