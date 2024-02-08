import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

/*
Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

Allow a user to filter stocks based on the type of the stock.
*/

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
