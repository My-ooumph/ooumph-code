/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modified 2026 by Myooumph Networks Private Limited: Ooumph brand palette
 * (gradient emerald #059669 -> blue #2563eb -> pink #db2777, navy ink #0f172a).
 */


import { type ColorsTheme, Theme } from './theme.js';
import { lightSemanticColors } from './semantic-tokens.js';

const ooumphLightColors: ColorsTheme = {
  type: 'light',
  Background: '#ffffff',
  Foreground: '#0f172a',
  LightBlue: '#2563eb',
  AccentBlue: '#2563eb',
  AccentPurple: '#db2777',
  AccentCyan: '#0e7490',
  AccentGreen: '#059669',
  AccentYellow: '#b45309',
  AccentRed: '#dc2626',
  AccentYellowDim: '#8B7000',
  AccentRedDim: '#993333',
  DiffAdded: '#059669',
  DiffRemoved: '#dc2626',
  Comment: '#64748b',
  Gray: '#cbd5e1',
  GradientColors: ['#059669', '#2563eb', '#db2777'],
};

export const OoumphLight: Theme = new Theme(
  'Ooumph Light',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: ooumphLightColors.Background,
      color: ooumphLightColors.Foreground,
    },
    'hljs-comment': {
      color: ooumphLightColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: ooumphLightColors.AccentCyan,
      fontStyle: 'italic',
    },
    'hljs-string': {
      color: ooumphLightColors.AccentGreen,
    },
    'hljs-constant': {
      color: ooumphLightColors.AccentCyan,
    },
    'hljs-number': {
      color: ooumphLightColors.AccentPurple,
    },
    'hljs-keyword': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-selector-tag': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-attribute': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-variable': {
      color: ooumphLightColors.Foreground,
    },
    'hljs-variable.language': {
      color: ooumphLightColors.LightBlue,
      fontStyle: 'italic',
    },
    'hljs-title': {
      color: ooumphLightColors.AccentBlue,
    },
    'hljs-section': {
      color: ooumphLightColors.AccentGreen,
      fontWeight: 'bold',
    },
    'hljs-type': {
      color: ooumphLightColors.LightBlue,
    },
    'hljs-class .hljs-title': {
      color: ooumphLightColors.AccentBlue,
    },
    'hljs-tag': {
      color: ooumphLightColors.LightBlue,
    },
    'hljs-name': {
      color: ooumphLightColors.AccentBlue,
    },
    'hljs-builtin-name': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-meta': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-symbol': {
      color: ooumphLightColors.AccentRed,
    },
    'hljs-bullet': {
      color: ooumphLightColors.AccentYellow,
    },
    'hljs-regexp': {
      color: ooumphLightColors.AccentCyan,
    },
    'hljs-link': {
      color: ooumphLightColors.LightBlue,
    },
    'hljs-deletion': {
      color: ooumphLightColors.AccentRed,
    },
    'hljs-addition': {
      color: ooumphLightColors.AccentGreen,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-literal': {
      color: ooumphLightColors.AccentCyan,
    },
    'hljs-built_in': {
      color: ooumphLightColors.AccentRed,
    },
    'hljs-doctag': {
      color: ooumphLightColors.AccentRed,
    },
    'hljs-template-variable': {
      color: ooumphLightColors.AccentCyan,
    },
    'hljs-selector-id': {
      color: ooumphLightColors.AccentRed,
    },
  },
  ooumphLightColors,
  lightSemanticColors,
);
