import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  const item = items.map(({ id, type, amount, currency }) => (
    <TransactionHistoryItem
      key={id}
      type={type}
      amount={amount}
      currency={currency}
    />
  ));
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </div>
  );
}
