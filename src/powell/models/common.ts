export type Severity = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';
export type ButtonAppearance = 'default' | 'text' | 'outlined' | 'link';
export type Direction = 'rtl' | 'ltr';
export type Size = 'small' | 'medium' | 'large';
export type Orientation = 'horizontal' | 'vertical';
export type Position = 'left' | 'right' | 'top' | 'bottom';
export type Nullable<T = void> = T | null | undefined;
export type SafeAny = any;
export type CssObject = Partial<CSSStyleDeclaration>;
export type ToastPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
    | 'center';
