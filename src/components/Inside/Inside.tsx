import styles from "./Inside.module.css";

const insideItems = [
    "виробники жіночого одягу: норма та батал",
    "постачальники для дропшипінгу",
    "оптові постачальники",
    "постачальники взуття",
    "постачальники білизни",
    "виробники купальників",
    "постачальники піжам",
    "українські виробники та постачальники з Туреччини та Китаю",
];

function BulletIcon() {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.icon}>
            <circle cx="10" cy="10" r="5.5" fill="none" />
            <path d="M7.6 10.2 9.2 11.8 12.6 8.4" fill="none" />
        </svg>
    );
}

export default function Inside() {
    return (
        <section className={`${styles.inside} section`} aria-labelledby="inside-title">
            <div className={styles.heading}>
                <h2 id="inside-title" className={styles.title}>
                    Що всередині?
                </h2>
            </div>

            <div className={styles.card}>
                <ul className={styles.list}>
                    {insideItems.map((item) => (
                        <li key={item} className={styles.item}>
                            <BulletIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
