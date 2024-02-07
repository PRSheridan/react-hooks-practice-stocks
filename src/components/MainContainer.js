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

  function handleBuyStock(event) {
    event.preventDefault()
    console.log(event.target.value)
    event.target.classList.remove("not-bought")
    event.target.classList.add("bought")
    //const newStock = stocks.filter((stock) => stock.id === e.target.value)
    //setPortfolio([...portfolio, ])
  }

  function handleSellStock(event) {
    event.target.className="not-bought"
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
              stocks={stocks} 
              onBuyStock={handleBuyStock}
              onSellStock={handleSellStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
