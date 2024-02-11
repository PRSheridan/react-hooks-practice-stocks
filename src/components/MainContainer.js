import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
//initialize state variables
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")
//on first render, fetch stockData
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stockData) => setStocks(stockData))
  }, [])
 //setStock and setPortfolio respectively: filter by id (could be combined probably)
  function handleBuyStock(id) {
    const newPortfolioStock = stocks.filter((stock) => stock.id === id)
    setPortfolio([...portfolio, newPortfolioStock[0]])
    setStocks([...stocks].filter((stock) => stock.id !== id))
  }
  function handleSellStock(id) {
    const newStock = portfolio.filter((stock) => stock.id === id)
    setStocks([...stocks, newStock[0]])
    setPortfolio([...portfolio].filter((stock) => stock.id !== id))
  }
//setSort and setFilter respectively: setSort by target value
  function handleSortChange(event) { setSort(event.target.value) }
  function handleFilterChange(event) { setFilter(event.target.value) }

  return (
    <div>
      <SearchBar 
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
              stocks={stocks} 
              sort={sort}
              filter={filter}
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
