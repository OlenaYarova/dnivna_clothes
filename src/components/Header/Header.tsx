import type { SVGProps } from "react";
import { LuInfinity, LuPhone, LuSend } from "react-icons/lu";
import styles from "./Header.module.css";

interface HeaderProps {
    name?: string;
}

type IconProps = SVGProps<SVGSVGElement>;

function UsersIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <path d="M15.5 19v-1.1a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 17.9V19" />
            <circle cx="9.8" cy="8.2" r="3.2" />
            <path d="M16.1 6.2a3.1 3.1 0 0 1 0 6.1" />
            <path d="M18.5 19v-1a3 3 0 0 0-2.2-2.9" />
        </svg>
    );
}

function GridIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <rect x="4" y="4" width="6" height="6" rx="1.2" />
            <rect x="14" y="4" width="6" height="6" rx="1.2" />
            <rect x="4" y="14" width="6" height="6" rx="1.2" />
            <rect x="14" y="14" width="6" height="6" rx="1.2" />
        </svg>
    );
}

const headerItems = [
    { icon: UsersIcon, label: "50 постачальників", size: 44, kind: "custom" as const },
    { icon: LuSend, label: "Telegram-канал", size: 42, kind: "lucide" as const },
    { icon: LuInfinity, label: "Безстроковий доступ", size: 48, kind: "lucide" as const },
    { icon: LuPhone, label: "Прямі контакти", size: 42, kind: "lucide" as const },
    { icon: GridIcon, label: "Готова навігація", size: 42, kind: "custom" as const },
];

export default function Header({ name = "DNIVNA" }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>{name}</div>
            <div className={styles.features} role="list" aria-label="Переваги">
                {headerItems.map(({ icon: Icon, label, size, kind }) => (
                    <div key={label} className={styles.feature} role="listitem">
                        {kind === "lucide" ? (
                            <Icon className={styles.icon} size={size} aria-hidden="true" />
                        ) : (
                            <Icon className={styles.icon} width={size} height={size} aria-hidden="true" />
                        )}
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </header>
    );
}
