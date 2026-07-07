import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "cta" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
}

export default function Button({
    children,
    className,
    type = "button",
    variant = "cta",
    ...props
}: ButtonProps) {
    const variantClassName = variant === "secondary" ? styles.secondary : styles.cta;
    const combinedClassName = [styles.button, variantClassName, className].filter(Boolean).join(" ");

    return (
        <button className={combinedClassName} type={type} {...props}>
            {children}
        </button>
    );
}
