import React, { useState, useEffect } from "react";
import "./app.css";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Footer from "./components/footer/Footer";
import Burger from "./components/burger/Burger";
import Exchanges from "./components/exchanges/Exchanges";
import Bot from "./components/bot/Bot";
import Benefits from "./components/benefits/Benefits";
import Examples from "./components/examples/Examples";
import Start from './components/start/Start';
import Analogos from './components/analogos/Analogos';
import Tariffs from './components/tariffs/Tariffs';
import Questions from './components/questions/Questions';




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }

  });

  return (
    <div className="app">
      <Burger isOpen={isMenuOpen} />

      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <Promo />

      <Exchanges />

      <Bot />

      <Benefits />

      <Examples />

      <Start />

      <Analogos />

      <Tariffs />

      <Questions />

      <Footer />
    </div>
  );
}

export default App;

