// Type definitions for ionicons Web Components
// This allows TypeScript to recognize ion-icon as a valid JSX element

declare namespace JSX {
    interface IntrinsicElements {
        'ion-icon': {
            name?: string;
            class?: string;
            style?: React.CSSProperties;
            size?: 'small' | 'large';
            color?: string;
            slot?: string;
        };
    }
}

export { };
