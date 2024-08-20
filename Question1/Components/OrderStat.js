import React from 'react';
import './OrderStat.css';

const OrderStat = ({ label, value, change, icon }) => {
  const isPositiveChange = change >= 0;

  return (
    <div className="order-stat">
      <div className="icon">{/* Use an icon based on the 'icon' prop */}</div>
      <div className="stat-content">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
        <p className={`stat-change ${isPositiveChange ? 'positive' : 'negative'}`}>
          {isPositiveChange ? '↑' : '↓'} {Math.abs(change)}%
        </p>
      </div>
    </div>
  );
};

export default OrderStat;


