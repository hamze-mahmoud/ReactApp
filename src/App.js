import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header'
import "./index.css"; // ← Tailwind styles
import Main from "./MainPage/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
