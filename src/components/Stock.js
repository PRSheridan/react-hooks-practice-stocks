import React from "react";

function Stock( {stock, onBuyStock, onSellStock} ) {
  return (
    <div>
      <div className="card">
        <div className="card-body, not-bought"  onClick={(event) => 
                (event.target.classList === "not-bought" ? () => onBuyStock(event) : () => onSellStock(event))}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`${stock.ticker}: ${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
