/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modified 2026 by Myooumph Networks Private Limited: Ooumph brand palette
 * (gradient emerald #059669 -> blue #2563eb -> pink #db2777, navy ink #0f172a).
 */


import { type ColorsTheme, Theme } from './theme.js';
import { darkSemanticColors } from './semantic-tokens.js';

const ooumphDarkColors: ColorsTheme = {
  type: 'dark',
  Background: '#0f172a',
  Foreground: '#f1f5fb',
  LightBlue: '#93c5fd',
  AccentBlue: '#60a5fa',
  AccentPurple: '#f472b6',
  AccentCyan: '#5eead4',
  AccentGreen: '#34d399',
  AccentYellow: '#fbbf24',
  AccentRed: '#f87171',
  AccentYellowDim: '#92400e',
  AccentRedDim: '#9f1239',
  DiffAdded: '#059669',
  DiffRemoved: '#be123c',
  Comment: '#94a3b8',
  Gray: '#334155',
  GradientColors: ['#059669', '#2563eb', '#db2777'],
};

export const OoumphDark: Theme = new Theme(
  'Ooumph Dark',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: ooumphDarkColors.Background,
      color: ooumphDarkColors.Foreground,
    },
    'hljs-keyword': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-literal': {
      color: ooumphDarkColors.AccentPurple,
    },
    'hljs-symbol': {
      color: ooumphDarkColors.AccentCyan,
    },
    'hljs-name': {
      color: ooumphDarkColors.LightBlue,
    },
    'hljs-link': {
      color: ooumphDarkColors.AccentBlue,
    },
    'hljs-function .hljs-keyword': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-subst': {
      color: ooumphDarkColors.Foreground,
    },
    'hljs-string': {
      color: ooumphDarkColors.AccentGreen,
    },
    'hljs-title': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-type': {
      color: ooumphDarkColors.AccentBlue,
    },
    'hljs-attribute': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-bullet': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-addition': {
      color: ooumphDarkColors.AccentGreen,
    },
    'hljs-variable': {
      color: ooumphDarkColors.Foreground,
    },
    'hljs-template-tag': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-template-variable': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-comment': {
      color: ooumphDarkColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: ooumphDarkColors.AccentCyan,
      fontStyle: 'italic',
    },
    'hljs-deletion': {
      color: ooumphDarkColors.AccentRed,
    },
    'hljs-meta': {
      color: ooumphDarkColors.AccentYellow,
    },
    'hljs-doctag': {
      fontWeight: 'bold',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
  },
  ooumphDarkColors,
  darkSemanticColors,
);
