import styles from "./How_work.module.css";

const steps = [
    { number: "01", title: "Оплачуєте доступ" },
    { number: "02", title: "Отримуєте посилання на Telegram" },
    { number: "03", title: "Переглядаєте базу" },
    { number: "04", title: "Обираєте постачальників" },
];

export default function HowWork() {
    return (
        <section className={`${styles.howWork} section`} aria-labelledby="how-work-title">
            <div className={styles.heading}>
                <h2 id="how-work-title" className={styles.title}>
                    Як це працює?
                </h2>
            </div>

            <div className={styles.panel}>
                <div className={styles.steps} role="list" aria-label="Етапи роботи з базою">
                    {steps.map((step) => (
                        <article key={step.number} className={styles.step} role="listitem">
                            <span className={styles.number}>{step.number}</span>
                            <p className={styles.stepTitle}>{step.title}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
