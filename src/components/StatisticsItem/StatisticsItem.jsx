export default function StatisticsItem({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
  );
}
