// main.tsx
import "modern-normalize";
import './global.css';
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Useful from "./components/Useful/Useful.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <main className="page-shell">
    <div className="container">
      <Header />
      <Hero />
      <Useful />
    </div>
  </main>
);
