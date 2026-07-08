import Button from "../Button/Button.tsx";
import styles from "./Why.module.css";

const reasons = [
    {
        title: "власний магазин жіночого одягу",

    },
    {
        title: "кілька років пошуку та відбору",

    },
    {
        title: "прямі контакти та зручні співпраці",

    },
    {
        title: "структурована база для легкої роботи",

    },
];

function UsersIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 19v-1.1a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 17.9V19" />
            <circle cx="9.8" cy="8.2" r="3.2" />
            <path d="M16.1 6.2a3.1 3.1 0 0 1 0 6.1" />
            <path d="M18.5 19v-1a3 3 0 0 0-2.2-2.9" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4 4" />
        </svg>
    );
}

function HandshakeIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.5 10.5 11 13a2.8 2.8 0 0 0 4 0l2.5-2.5" />
            <path d="M3.5 9.5 7 6l4 4-3.5 3.5L3.5 9.5Z" />
            <path d="m20.5 9.5-3.5-3.5-4 4 3.5 3.5 4-4Z" />
            <path d="M8 14.2 10 16" />
            <path d="M10.5 16.2 12 17.7" />
            <path d="M13 17.5 14.2 18.7" />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="1.2" />
            <rect x="14" y="4" width="6" height="6" rx="1.2" />
            <rect x="4" y="14" width="6" height="6" rx="1.2" />
            <rect x="14" y="14" width="6" height="6" rx="1.2" />
        </svg>
    );
}

const icons = [UsersIcon, SearchIcon, HandshakeIcon, GridIcon] as const;

export default function Why() {
    return (
        <section className={`${styles.why} section`} aria-labelledby="why-title">
            <div className={styles.visual} aria-hidden="true">
                <div className={styles.photoCard}>
                    <div className={styles.person} />
                    <div className={styles.laptop} />
                    <div className={styles.vase}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={styles.tableLine} />
                </div>
            </div>

            <div className={styles.content}>
                <h2 id="why-title" className={styles.title}>
                    Чому DNIVNA?
                </h2>

                <div className={styles.text}>
                    <p>
                        За кожним магазином стоять не лише речі, а й роки пошуку постачальників, контактів та співпраці.

                    </p>
                    <p>
                        Ця база сформувалася протягом кількох років вивчення ринку жіночого одягу та роботи з українськими постачальниками.

                    </p>
                    <p>
                        Частина постачальників із цієї бази використовується у роботі магазину DNIVNA.
                    </p>

                    <p>Я не продаю курсів і не навчаю бізнесу.
                    </p>
                    <p>Я ділюся результатом власного досвіду, пошуку та роботи з ринком жіночого одягу.
                    </p>
                </div>

                <div className={styles.reasons} role="list" aria-label="Переваги DNIVNA">
                    {reasons.map((reason, index) => {
                        const Icon = icons[index];

                        return (
                            <article key={reason.title} className={styles.reason} role="listitem">
                                <div className={styles.iconWrap}>
                                    <Icon />
                                </div>
                                <h3>{reason.title}</h3>

                            </article>
                        );
                    })}
                </div>

                {/* <Button className={styles.button}>Отримати доступ</Button> */}
            </div>
        </section>
    );
}
