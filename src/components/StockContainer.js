import React from "react";
import Stock from "./Stock";

function StockContainer( {stocks, sort, filter, onBuyStock, onSellStock} ) {
//plugin to sort call in handleSortFilterChange
  function comparePrice(a, b) { return (b.price - a.price) }
  function compareName(a, b) {
    const textA = a.name.toLowerCase();
    const textB = b.name.toLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
//creates a spread copy of stocks, filter stocks if type === filter (str), call compare function if needed
  function handleSortFilterChange(sort, filter) {
    let newStocks = [...stocks]
    if (filter !== "") { newStocks = newStocks.filter((stock) => stock.type === filter) }
    if (sort === "Alphabetically")
    { return newStocks.sort(compareName) }
    if (sort === "Price")
    { return newStocks.sort(comparePrice) }
    return newStocks
  }

  return (
    <div>
      <h2>Stocks</h2>
      {handleSortFilterChange(sort, filter).map((stock) => (
        <Stock 
            key={stock.id} 
            onBuyStock={onBuyStock}
            onSellStock={onSellStock} 
            stock={stock}
            location={"stocks"}/>
      ))}
    </div>
  );
}

export default StockContainer;
