import { useEffect, useState } from "react";
import Button from "../Button/Button.tsx";
import { PAYMENT_URL } from "../../constants/payment.ts";
import styles from "./Hero.module.css";
const START_DAYS = 30;
const START_HOURS = 24;
const SECOND_MS = 1000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;
const TOTAL_DURATION_MS = START_DAYS * DAY_MS + START_HOURS * HOUR_MS;

function getCountdownParts(startedAt: number, now: number) {
    const elapsedMs = now - startedAt;
    const remainingMs = Math.max(TOTAL_DURATION_MS - elapsedMs, 0);

    const days = Math.floor(remainingMs / DAY_MS);
    const hours = Math.floor((remainingMs % DAY_MS) / HOUR_MS);
    const minutes = Math.floor((remainingMs % HOUR_MS) / MINUTE_MS);
    const seconds = Math.floor((remainingMs % MINUTE_MS) / SECOND_MS);

    return { days, hours, minutes, seconds };
}

export default function Hero() {
    const [startedAt] = useState(() => Date.now());
    const [countdown, setCountdown] = useState(() => getCountdownParts(startedAt, Date.now()));

    useEffect(() => {
        const timerId = window.setInterval(() => {
            setCountdown(getCountdownParts(startedAt, Date.now()));
        }, 1000);

        return () => window.clearInterval(timerId);
    }, [startedAt]);

    return (
        <section className={`${styles.hero} section`}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Хочете запустити
                    магазин одягу,
                    але не знаєте,
                    з чого почати?
                </h1>
                <p className={styles.kicker}>Перший крок до запуску власного магазину.</p>
                <p className={styles.description}>
                    <strong>DNIVNA SUPPLIERS Base</strong> —
                    <br />
                    готова база з 50 постачальниками
                    <br />
                    в одному Telegram-каналі.
                </p>

                <div className={styles.offerCard}>
                    <div className={styles.offerTop}>
                        <div>
                            <span className={styles.oldPrice}>1499 грн</span>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>1099</span>
                                <span className={styles.currency}>грн</span>
                            </div>
                        </div>
                        <div className={styles.timer}>
                            <span className={styles.timerLabel}>До завершення запуску</span>
                            <div className={styles.timerValues}>
                                <div>
                                    <strong>{String(countdown.days).padStart(2, "0")}</strong>
                                    <span>днів</span>
                                </div>
                                <div>
                                    <strong>{String(countdown.hours).padStart(2, "0")}</strong>
                                    <span>годин</span>
                                </div>
                                <div>
                                    <strong>{String(countdown.minutes).padStart(2, "0")}</strong>
                                    <span>хвилин</span>
                                </div>
                                <div>
                                    <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
                                    <span>секунд</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button href={PAYMENT_URL}>Отримати доступ</Button>
                </div>
            </div>

            <div className={styles.visual} aria-hidden="true">
                <div className={styles.visualFrame}>
                    <div className={styles.visualGlow} />
                    <div className={`${styles.device} ${styles.deviceLaptop}`}>
                        <div className={styles.deviceScreen}>
                            <div className={styles.sidebar} />
                            <div className={styles.screenContent}>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <div className={styles.devicePhone}>
                        <div className={styles.phoneScreen}>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className={styles.decorStem} />
                </div>
            </div>
        </section>
    );
}
