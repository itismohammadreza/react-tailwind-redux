import {SafeAny} from "@powell/models/common";

export type UseTransformOptions = {
  value: SafeAny;
  onChange: (...event: SafeAny[]) => void;
  transform?: {
    input?: (value: SafeAny) => SafeAny;
    output?: (...event: SafeAny[]) => SafeAny;
  }
}
