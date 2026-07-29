import { PiCoatHanger } from "react-icons/pi";
import Button from "../Button/Button.tsx";
import styles from "./More_that.module.css";

function HangerIcon() {
    return <PiCoatHanger aria-hidden="true" className={styles.reactIcon} />;
}

const items = [
    {
        title: "Зручна навігація",
        text: "Усе розкладено по категоріях для швидкого пошуку",
        icon: FolderIcon,
    },
    {
        title: "Приклади асортименту",
        text: "Реальні фото товару від кожного постачальника",
        icon: HangerIcon,
    },
    {
        title: "Різні категорії",
        text: "Жіночий одяг, взуття, білизна, аксесуари та багато іншого",
        icon: TagIcon,
    },
    {
        title: "Прямі контакти",
        text: "Без посередників — лише перевірені прямі контакти постачальників",
        icon: SendIcon,
    },
];

function FolderIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.5 7.5h5l1.6 2H20.5v8.8a1.7 1.7 0 0 1-1.7 1.7H5.2a1.7 1.7 0 0 1-1.7-1.7V7.5Z" />
            <path d="M3.5 9.5V6.8A1.8 1.8 0 0 1 5.3 5h4l1.6 2h7.8a1.8 1.8 0 0 1 1.8 1.8v.7" />
        </svg>
    );
}

function TagIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.4 4H7.6a1.8 1.8 0 0 0-1.3.5L4.5 6.3A1.8 1.8 0 0 0 4 7.6v4.8c0 .5.2.9.5 1.3l5.8 5.8a1.8 1.8 0 0 0 2.5 0l6.7-6.7a1.8 1.8 0 0 0 0-2.5l-5.8-5.8a1.8 1.8 0 0 0-1.3-.5Z" />
            <circle cx="8.6" cy="8.6" r="1.1" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4 4.8 10.1c-.8.3-.8 1.4.1 1.7l5.2 1.7 1.7 5.2c.3.9 1.4.9 1.7.1L20 4Z" />
            <path d="M10 13.4 20 4" />
        </svg>
    );
}

export default function MoreThat() {
    return (
        <section className={`${styles.moreThat} section`} aria-labelledby="more-that-title">

            <h2 id="more-that-title" className={styles.title}>
                Це більше, ніж база контактів
            </h2>

            <div className={styles.grid} role="list" aria-label="Переваги бази">
                {items.map(({ title, text, icon: Icon }) => (
                    <article key={title} className={styles.card} role="listitem">
                        <div className={styles.iconWrap}>
                            <Icon />
                        </div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>
                ))}
            </div>

            <Button className={styles.button}>Отримати доступ</Button>
        </section>
    );
}
