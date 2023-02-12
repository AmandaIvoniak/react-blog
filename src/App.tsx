import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/app";
import { Details } from "./pages/details/details";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
