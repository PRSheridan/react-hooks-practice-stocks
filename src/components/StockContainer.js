import React from "react";
import Stock from "./Stock";

function StockContainer( {stocks, onBuyStock, onSellStock} ) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock 
            key={stock.id} 
            onBuyStock={onBuyStock} 
            onSellStock={onSellStock}
            stock={stock}/>
      ))}
    </div>
  );
}

export default StockContainer;
