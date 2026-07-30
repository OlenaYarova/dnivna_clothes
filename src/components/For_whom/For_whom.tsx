import styles from "./For_whom.module.css";

const beginnerItems = [
    "хочете запустити магазин одягу",
    "плануєте працювати по дропшипінгу",
    "не знаєте, де шукати постачальників",
];

const sellerItems = [
    "шукаєте нових постачальників",
    "хочете розширити асортимент",
    "шукаєте альтернативних виробників",
];

function CheckIcon() {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.checkIcon}>
            <circle cx="10" cy="10" r="8" />
            <path d="M6.8 10.3 8.9 12.4 13.5 7.8" fill="none" />
        </svg>
    );
}

export default function ForWhom() {
    return (
        <section className={`${styles.forWhom} section`} aria-labelledby="for-whom-title">
            <div className={styles.heading}>
                <h2 id="for-whom-title" className={styles.title}>
                    Для кого ця база?
                </h2>
            </div>

            <div className={styles.columns}>
                <article className={styles.card}>
                    <h3 className={styles.cardTitle}>Якщо ви тільки починаєте:</h3>
                    <ul className={styles.list}>
                        {beginnerItems.map((item) => (
                            <li key={item} className={styles.item}>
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className={styles.card}>
                    <h3 className={styles.cardTitle}>Якщо ви вже продаєте:</h3>
                    <ul className={styles.list}>
                        {sellerItems.map((item) => (
                            <li key={item} className={styles.item}>
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
