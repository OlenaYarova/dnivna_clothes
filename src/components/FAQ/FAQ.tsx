import Button from "../Button/Button.tsx";
import { PAYMENT_URL } from "../../constants/payment.ts";
import styles from "./FAQ.module.css";

const questions = [
    {
        question: "Це навчання або курс?",
        answer: "Ні, це готова база постачальників, зібрана в одному місці.",
    },
    {
        question: "Чи є підтримка?",
        answer: "Ні. Продукт продається у форматі готової бази.",
    },
    {
        question: "Як отримати доступ?",
        answer: "Після оплати ви отримуєте посилання на Telegram- канал",
    },
    {
        question: "Чи можна передавати базу іншим?",
        answer: "Ні, доступ призначений лише для особистого користування.",
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

            <Button className={styles.button} href={PAYMENT_URL}>
                Отримати доступ
            </Button>
        </section>
    );
}
