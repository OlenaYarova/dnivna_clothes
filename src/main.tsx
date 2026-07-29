import "modern-normalize";
import "./global.css";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Useful from "./components/Useful/Useful.tsx";
import Why from "./components/Why/Why.tsx";
import MoreThat from "./components/More_that/More_that.tsx";
import Inside from "./components/Inside/Inside.tsx";
import ForWhom from "./components/For_whom/For_whom.tsx";
import HowWork from "./components/How_work/How_work.tsx";
import FAQ from "./components/FAQ/FAQ.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
    <main className="page-shell">
        <div className="container">
            <Header />
            <Hero />
            <Useful />
            <Why />
            <MoreThat />
            <Inside />
            <ForWhom />
            <HowWork />
            <FAQ />
        </div>
    </main>
);
