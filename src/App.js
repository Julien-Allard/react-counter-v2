import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import AddCounter from "./components/AddCounter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState([0]);

  const addCounter = () => {
    if (counter.length < 3) {
      const newCounter = [...counter];
      newCounter.push(0);
      setCounter(newCounter);
    }
  };

  return (
    <div className="container">
      <Header />
      <AddCounter onClick={addCounter} />
      <div className="all-counters">
        <Counter counter={counter} setCounter={setCounter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
