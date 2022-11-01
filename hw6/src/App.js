import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Battle from "./pages/Battle/Battle";
import Header from "./components/Header/Header";
import Popular from "./pages/Popular/Popular";
import Results from "./pages/Results/Results";

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path={"/"}
            element={<Home />}
          />
          <Route
            path={"/battle"}
            element={<Battle />}
          />
          <Route
            path={"/popular"}
            element={<Popular />}
          />
          <Route
            path='/battle/results'
            element={<Results />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
