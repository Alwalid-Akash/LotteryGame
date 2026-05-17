
export default function HowToPlay() {
  return (
    <div className="card shadow mt-4 border-0">
      <div className="card-body text-start">

        <h5 className="card-title text-primary mb-3">
          🎮 How to Play
        </h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            🎲 Click <b>Spin</b> to generate a 3-digit ticket
          </li>

          <li className="list-group-item">
            🔢 Each digit is random (0–9)
          </li>

          <li className="list-group-item">
            🧮 If sum of digits = <b>15</b> → WIN 🎉
          </li>

          <li className="list-group-item">
            ❌ Otherwise → LOSE
          </li>
        </ul>

      </div>
    </div>
  );
}