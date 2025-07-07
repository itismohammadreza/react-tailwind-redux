import {CSSProperties} from "react";

export type ButtonAppearance = 'default' | 'text' | 'outlined' | 'link';
export type Direction = 'rtl' | 'ltr';
export type Size = 'small' | 'large';
export type Orientation = 'horizontal' | 'vertical';
export type Position = 'left' | 'right' | 'top' | 'bottom';
export type FileResultType = 'base64' | 'file' | 'none';
export type Nullable<T = void> = T | null | undefined;
export type SafeAny = any;
export type CssObject = Partial<CSSProperties>;
export type ToastPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
    | 'center';
