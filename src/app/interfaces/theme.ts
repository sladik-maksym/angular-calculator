import { THEMES } from '../constants/theme';

export type Themes = typeof THEMES;

export type Theme = Themes[keyof typeof THEMES];
