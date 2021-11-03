import "./App.css";
import { useState } from "react";
import Selection from "./components/Selection";
import Total from "./components/Total";

const App = () => {
  const [price, setPrice] = useState(90700);

  return (
    <div className="App">
      <header>
        <h1>TeslaConfig</h1>
      </header>
      <Selection
        title="Sélectionnez votre véhicule"
        option1="Grande autonomie"
        price1="90700"
        option2="Performance"
        price2="106700"
        price={price}
        setPrice={setPrice}
      />
      <Selection
        title="Sélectionnez la couleur"
        option1="Blanc nacré multicouches"
        price1="0"
        option2="Noir uni"
        price2="1000"
        price={price}
        setPrice={setPrice}
      />

      <Total price={price} />
    </div>
  );
};

export default App;
