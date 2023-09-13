import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      {counter > 0 && <Spinner></Spinner>}
      {counter == 0 && (
        <>
          <header className="App-header overflow-hidden">
            <NavBar></NavBar>
          </header>
          <Home></Home>
        </>
      )}
    </div>
  );
}

export default App;
