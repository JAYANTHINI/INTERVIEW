import React from 'react';
import OrderStat from './OrderStat';
import './WidgetOrderStats.css';

const WidgetOrderStats = ({ stats }) => {
  return (
    <div className="widget-container">
      <OrderStat 
        label="Revenue" 
        value={`$${stats.revenue.amount}`} 
        change={stats.revenue.change} 
        icon="arrow" 
      />
      <OrderStat 
        label="Orders" 
        value={stats.orders.count} 
        change={stats.orders.change} 
        icon="cart" 
      />
      <OrderStat 
        label="Dine in" 
        value={stats.dineIn.count} 
        change={stats.dineIn.change} 
        icon="dine-in" 
      />
      <OrderStat 
        label="Take away" 
        value={stats.takeAway.count} 
        change={stats.takeAway.change} 
        icon="takeaway" 
      />
    </div>
  );
};

export default WidgetOrderStats;

