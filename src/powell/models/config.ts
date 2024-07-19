import { PrimeAPIOptions, PrimeInputTextProps } from "@powell/api";

export interface PowellConfig extends PrimeAPIOptions {
  rtl?: boolean;
  showRequiredStar?: boolean;
  formVariant?: PrimeInputTextProps["variant"];
}
