export default function TicketNum({ num }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span className="border px-3 py-2 rounded fs-3">
        {num}
      </span>
    </div>
  );
}