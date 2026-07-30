import Button from "../Button/Button.tsx";
import { PAYMENT_URL } from "../../constants/payment.ts";
import styles from "./Useful.module.css";

const usefulItems = [
    "хочете запустити магазин, але не знаєте, де брати товар",
    "витрачаєте години на пошук постачальників",
    "не знаєте, кому можна довіряти",
    "хочете розширити асортимент",
    "працюєте по дропшипінгу",
    "шукаєте нових постачальників",
];

function DotIcon() {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.dotIcon}>
            <circle cx="10" cy="10" r="5.5" fill="none" />
            <path d="M7.6 10.2 9.2 11.8 12.6 8.4" fill="none" />
        </svg>
    );
}

function ThinkingIllustration() {
    return (
        <svg viewBox="0 0 280 280" aria-hidden="true" className={styles.illustration}>
            <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M168 70c24 0 44 17 49 40 6 28-8 54-8 73 0 13 3 25 8 36" />
                <path d="M124 98c9-22 28-36 53-36" />
                <path d="M156 150c-11-3-23 2-30 11-7 10-9 23-6 34l4 16c2 9 10 15 19 15h20c9 0 17-6 19-15l2-10" />
                <path d="M145 170c5 2 10 8 12 16" />
                <path d="M111 188c-10 14-11 34-3 49 9 17 27 27 46 27 17 0 33-8 43-22" />
                <path d="M117 214c13-8 29-7 41 0" />
                <path d="M118 217c-7 7-16 16-21 28" />
                <path d="M161 218c10 9 18 18 24 30" />
                <path d="M138 114c-10 4-18 13-21 24-4 15 2 29 13 39" />
                <path d="M125 173c-7 1-13 5-18 10" />
                <path d="M172 140c8 5 13 13 14 22" />
                <path d="M177 163c7 2 14 7 19 13" />
                <path d="M131 128c7-3 15-2 22 2" />
                <path d="M197 65c9-7 23-7 32 1" />
                <path d="M218 104c10-1 20 5 24 14" />
                <path d="M226 142c8 3 13 11 13 19" />
            </g>
        </svg>
    );
}

export default function Useful() {
    return (
        <section className={`${styles.useful} section`} aria-labelledby="useful-title">
            <div className={styles.copy}>
                <h2 id="useful-title" className={styles.title}>
                    Якщо ви впізнаєте себе —
                    <br />
                    ця база може бути вам корисною
                </h2>

                <ul className={styles.list}>
                    {usefulItems.map((item) => (
                        <li key={item} className={styles.item}>
                            <DotIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <Button className={styles.button} href={PAYMENT_URL}>
                    Отримати доступ
                </Button>
            </div>

            <div className={styles.visual}>
                <ThinkingIllustration />
            </div>
        </section>
    );
}
