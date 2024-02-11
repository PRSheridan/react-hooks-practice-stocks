import React from "react";

function Stock( {stock, onBuyStock, onSellStock, location} ) {
//when the stock is clicked Buy/Sell respectively
  function handleClick(event) {
    event.preventDefault()
    if (location === "stocks") { onBuyStock(stock.id) } 
    else { onSellStock(stock.id) }
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`${stock.ticker}: ${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;