import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stockData) => setStocks(stockData))
  }, [])

  //having two functions here is arbitrary but it's fine :,)
  function handleBuyStock(id) {
    console.log("")
    const newPortfolioStock = stocks.filter((stock) => stock.id === id)
    setPortfolio([...portfolio, newPortfolioStock[0]])
    setStocks([...stocks].filter((stock) => stock.id !== id))
  }

  function handleSellStock(id) {
    console.log("")
    const newStock = portfolio.filter((stock) => stock.id === id)
    setStocks([...stocks, newStock[0]])
    setPortfolio([...portfolio].filter((stock) => stock.id !== id))
  }

  function handleSortChange(event) {
    console.log(event.target.value)
    //sort em
  }

  function handleFilterChange(event) {
    console.log(event.target.value)
    //filter em
  }

  return (
    <div>
      <SearchBar 
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
              stocks={stocks} 
              onBuyStock={handleBuyStock}
              onSellStock={handleSellStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
              portfolio={portfolio}
              onBuyStock={handleBuyStock}
              onSellStock={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
