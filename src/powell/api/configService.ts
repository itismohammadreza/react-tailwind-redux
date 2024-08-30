import {globalState} from "@powell/utils";
import {PowellConfig} from "@powell/models";

export const configService = globalState<PowellConfig>({});
