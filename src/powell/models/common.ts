export type LabelPos = 'float' | 'fix-side' | 'fix-top';

export type FixLabelPos = Exclude<LabelPos, 'float'>;
