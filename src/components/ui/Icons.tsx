type IconProps = { className?: string };

export function ArrowDownRight({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M1 1l12 12M13 3v10H3" />
        </svg>
    );
}

export function ArrowUpRight({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M1 13L13 1M3 1h10v10" />
        </svg>
    );
}

export function Globe({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4.5" ry="10" />
            <path d="M2 12h20M4 6.5h16M4 17.5h16" />
        </svg>
    );
}

export function GridIcon({ className }: IconProps) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <rect x="1" y="1" width="6" height="6" />
            <rect x="9" y="1" width="6" height="6" />
            <rect x="1" y="9" width="6" height="6" />
            <rect x="9" y="9" width="6" height="6" />
        </svg>
    );
}

export function ListIcon({ className }: IconProps) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <rect x="1" y="2" width="14" height="2" />
            <rect x="1" y="7" width="14" height="2" />
            <rect x="1" y="12" width="14" height="2" />
        </svg>
    );
}
