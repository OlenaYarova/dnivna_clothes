// main.tsx
import "modern-normalize";
import './global.css';
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Useful from "./components/Useful/Useful.tsx";
import Why from "./components/Why/Why.tsx";
import MoreThat from "./components/More_that/More_that.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <main className="page-shell">
    <div className="container">
      <Header />
      <Hero />
      <Useful />
      <Why />
      <MoreThat />
    </div>
  </main>
);
