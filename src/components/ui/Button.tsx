import Link from 'next/link';
import Magnetic from './Magnetic';

type Common = {
    children: React.ReactNode;
    className?: string;
    magnetic?: boolean;
    round?: boolean;
    blue?: boolean;
};

type LinkButton = Common & { href: string; external?: boolean; download?: string; onClick?: () => void };
type ActionButton = Common & {
    href?: undefined;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    active?: boolean;
    ariaLabel?: string;
    ariaPressed?: boolean;
};

export default function Button(props: LinkButton | ActionButton) {
    const { children, className = '', magnetic = false, round = false, blue = false } = props;
    const classes = ['btn', round && 'btn-round', blue && 'is-blue', className].filter(Boolean).join(' ');
    const inner = (
        <>
            <span className="btn-fill" aria-hidden="true" />
            <span style={{ position: 'relative' }}>{children}</span>
        </>
    );

    let el: React.ReactNode;
    if (props.href !== undefined) {
        const { href, external, download, onClick } = props;
        const plainAnchor = /^(mailto|tel):/.test(href);
        el = external || download || plainAnchor ? (
            <a
                href={href}
                className={classes}
                onClick={onClick}
                download={download}
                {...(external && !plainAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {inner}
            </a>
        ) : (
            <Link href={href} className={classes} onClick={onClick}>
                {inner}
            </Link>
        );
    } else {
        const { onClick, type = 'button', disabled, active, ariaLabel, ariaPressed } = props;
        el = (
            <button
                type={type}
                className={`${classes}${active ? ' is-active' : ''}`}
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
                aria-pressed={ariaPressed}
            >
                {inner}
            </button>
        );
    }

    return magnetic ? <Magnetic>{el}</Magnetic> : el;
}

export function Roll({ children }: { children: string }) {
    return (
        <span className="roll">
            <span>{children}</span>
            <span aria-hidden="true">{children}</span>
        </span>
    );
}
