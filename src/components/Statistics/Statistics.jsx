import StatisticsItem from '../StatisticsItem/StatisticsItem';

export default function Statistics({ title, stats }) {
  const item = stats.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} label={label} percentage={percentage} />
  ));
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">{item}</ul>
      </section>
    </div>
  );
}
