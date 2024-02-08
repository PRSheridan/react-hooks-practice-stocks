import React from "react";

function Stock( {stock, onBuyStock, onSellStock, location} ) {

  function handleClick(event) {
    event.preventDefault()
    if (location === "stocks") {
      console.log(stock.name)
      console.log("buy")
      onBuyStock(stock.id)
    } else {
      console.log(stock.name)
      console.log("sell")
      onSellStock(stock.id)
    }
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