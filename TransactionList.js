import React from 'react';
import './TransactionList.css';

const transactions = [
    { id: 1, name: 'Aokiji', date: '28 Feb 2023', time: '06:23 PM', amount: '+$13.00', status: 'Received' },
    { id: 2, name: 'Kizaru', date: '28 Feb 2023', time: '06:23 PM', amount: '-$9.00', status: 'Outgoing' },
    { id: 3, name: 'Akainu', date: '28 Feb 2023', time: '06:23 PM', amount: '+$20.00', status: 'Received' }
];

const TransactionList = () => {
    return (
        <div className="transaction-list">
            <h2>Last Transactions</h2>
            <button className="see-all">See All</button>
            {transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                    <div className="transaction-details">
                        <img src={`https://via.placeholder.com/50?text=${transaction.name.charAt(0)}`} alt={transaction.name} />
                        <div>
                            <p className="transaction-name">{transaction.name}</p>
                            <p className="transaction-time">{transaction.date} · {transaction.time}</p>
                        </div>
                    </div>
                    <div className="transaction-amount" style={{ color: transaction.amount.startsWith('-') ? 'red' : 'green' }}>
                        {transaction.amount}
                    </div>
                    <p className="transaction-status">{transaction.status}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
