import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {portfolio, onBuyStock, onSellStock} ) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
          <Stock 
              key={stock.id} 
              onBuyStock={onBuyStock}
              onSellStock={onSellStock}
              stock={stock}
              location={"portfolio"}
           />
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
