import styles from './TransactionHistoryTable.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

const transactions = [
  { transaction: 'Uber 063015 SFPOOL', amount: 5.4, status: 'Success', date: 'Wed, Apr 24, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'United Airlines', amount: -500, status: 'Success', date: 'Mon, Apr 22, 5:30 AM', channel: 'In Store', category: 'Travel' },
  { transaction: 'McDonalds', amount: 12, status: 'Failed', date: 'Sun, Apr 21, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'Starbucks', amount: 4.33, status: 'Success', date: 'Sun, Apr 21, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'SparkFun', amount: 89.4, status: 'Success', date: 'Sat, Apr 20, 5:30 AM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'Uber 072515 SFPOOL', amount: 6.33, status: 'Success', date: 'Sun, Apr 7, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Apple Store', amount: 299.99, status: 'Success', date: 'Fri, Apr 19, 4:00 PM', channel: 'In Store', category: 'Electronics' },
  { transaction: 'Amazon Purchase', amount: 23.95, status: 'Failed', date: 'Thu, Apr 18, 3:45 PM', channel: 'Online', category: 'Retail' },
  { transaction: 'Netflix Subscription', amount: 15.99, status: 'Success', date: 'Wed, Apr 17, 8:00 AM', channel: 'Online', category: 'Entertainment' },
  { transaction: 'Gas Station', amount: 45.67, status: 'Success', date: 'Tue, Apr 16, 6:30 AM', channel: 'In Store', category: 'Transportation' },
  { transaction: 'Spotify Subscription', amount: 9.99, status: 'Success', date: 'Mon, Apr 15, 12:00 PM', channel: 'Online', category: 'Entertainment' },
  { transaction: 'Best Buy', amount: 399.99, status: 'Success', date: 'Sun, Apr 14, 2:00 PM', channel: 'In Store', category: 'Electronics' },
  { transaction: 'Target', amount: 52.48, status: 'Failed', date: 'Sat, Apr 13, 4:15 PM', channel: 'In Store', category: 'Retail' },
  { transaction: 'Netflix Subscription', amount: 15.99, status: 'Success', date: 'Fri, Apr 12, 8:00 AM', channel: 'Online', category: 'Entertainment' },
  { transaction: 'Shell Gas', amount: 65.12, status: 'Success', date: 'Thu, Apr 11, 7:30 AM', channel: 'In Store', category: 'Transportation' },
  { transaction: 'Uber 063015 SFPOOL', amount: 8.99, status: 'Success', date: 'Wed, Apr 10, 5:30 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'KFC', amount: 18.47, status: 'Failed', date: 'Tue, Apr 9, 1:00 PM', channel: 'In Store', category: 'Food and Drink' },
  { transaction: 'Delta Airlines', amount: -450.00, status: 'Success', date: 'Mon, Apr 8, 9:00 AM', channel: 'Online', category: 'Travel' },
  { transaction: 'Walmart', amount: 67.34, status: 'Failed', date: 'Sun, Apr 7, 4:30 PM', channel: 'In Store', category: 'Retail' },
  { transaction: 'Airbnb Booking', amount: -200.00, status: 'Success', date: 'Mon, Apr 1, 5:00 PM', channel: 'Online', category: 'Travel' }
];

const TransactionHistoryTable = () => {
  return (
    <div className={`shadow-md my-5 rounded-md ${styles.scrollableTable}`}>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-blue-600 text-white">
            <th className="py-3 px-4">Transaction</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Channel</th>
            <th className="py-3 px-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionHistoryItem
              key={index}
              transaction={transaction.transaction}
              amount={transaction.amount}
              status={transaction.status}
              date={transaction.date}
              channel={transaction.channel}
              category={transaction.category}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;