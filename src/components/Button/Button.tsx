import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "cta" | "secondary";

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

type ButtonProps = (ButtonAsButtonProps | ButtonAsLinkProps) & {
    children: ReactNode;
    variant?: ButtonVariant;
};

export default function Button({
    children,
    className,
    variant = "cta",
    ...props
}: ButtonProps) {
    const variantClassName = variant === "secondary" ? styles.secondary : styles.cta;
    const combinedClassName = [styles.button, variantClassName, className].filter(Boolean).join(" ");

    if ("href" in props && props.href) {
        return (
            <a className={combinedClassName} href={props.href} target={props.target} rel={props.rel}>
                {children}
            </a>
        );
    }

    const buttonProps = props as ButtonAsButtonProps;

    return (
        <button className={combinedClassName} type={buttonProps.type ?? "button"} {...buttonProps}>
            {children}
        </button>
    );
}
