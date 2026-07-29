import Button from "../Button/Button.tsx";
import styles from "./FAQ.module.css";

const questions = [
    {
        question: "Це навчання або курс?",
        answer: "Це збірка бази постачальників.",
    },
    {
        question: "Чи є підтримка?",
        answer: "Так, ми надаємо підтримку користувачам.",
    },
    {
        question: "Як я отримаю доступ?",
        answer: "пупупу",
    },
    {
        question: "Чи можна передавати базу іншим?",
        answer: "Ні",
    },
];

export default function FAQ() {
    return (
        <section className={`${styles.faq} section`} aria-labelledby="faq-title">
            <div className={styles.heading}>

                <h2 id="faq-title" className={styles.title}>
                    FAQ
                </h2>
            </div>

            <div className={styles.list}>
                {questions.map((item) => (
                    <details key={item.question} className={styles.item}>
                        <summary className={styles.summary}>{item.question}</summary>
                        <p className={styles.answer}>{item.answer}</p>
                    </details>
                ))}
            </div>

            <Button className={styles.button}>Отримати доступ</Button>
        </section>
    );
}
