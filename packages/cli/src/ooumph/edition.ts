/**
 * @license
 * Copyright 2026 Myooumph Networks Private Limited
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Ooumph Code editions. One codebase, two products:
 *
 * - `company`: Ooumph's own build for employee laptops. Talks to the laptop's
 *   FLM node when `OOUMPH_FLM_URL` is set, otherwise to local Qwen via Ollama,
 *   and joins Praveen's brain network through `OOUMPH_BRAIN_URL`.
 * - `world`: the public build. Runs on any machine against a local model
 *   (Ollama) and never contacts Ooumph's internal brain.
 *
 * The edition comes from `OOUMPH_EDITION`, else the build default below.
 * Every default only fills a variable the user has not set: explicit
 * `OPENAI_*` settings always win.
 */

export type OoumphEdition = 'company' | 'world';

/** Build default; installers for company laptops set OOUMPH_EDITION=company. */
export const BUILD_EDITION: OoumphEdition = 'world';

const OLLAMA_URL = 'http://127.0.0.1:11434/v1';
// Defaults mirror editions/{world,company}/settings.json, the source of truth for the editions.
/** Fits an 8 GB laptop; override with OOUMPH_MODEL. */
const DEFAULT_LOCAL_MODEL = 'qwen3:1.7b';
const FLM_MODEL = 'flm-local';
/** Ollama ignores the key, but the CLI selects OpenAI-compatible auth only when one is present. */
const LOCAL_PLACEHOLDER_KEY = 'ollama';

export interface EditionProfile {
  edition: OoumphEdition;
  title: string;
  subtitle: string;
  baseUrl: string;
  model: string;
  brainUrl?: string;
}

type Env = Record<string, string | undefined>;

export function resolveEdition(env: Env): OoumphEdition {
  const raw = (env['OOUMPH_EDITION'] ?? '').trim().toLowerCase();
  return raw === 'company' || raw === 'world' ? raw : BUILD_EDITION;
}

export function editionProfile(env: Env): EditionProfile {
  const edition = resolveEdition(env);
  const chosen = env['OOUMPH_MODEL']?.trim();
  if (edition === 'company') {
    const flm = env['OOUMPH_FLM_URL']?.trim();
    return {
      edition,
      title: 'Ooumph Code',
      subtitle: 'Company edition · FLM brain network · Myooumph Networks Private Limited',
      baseUrl: flm || OLLAMA_URL,
      model: chosen || (flm ? FLM_MODEL : DEFAULT_LOCAL_MODEL),
      brainUrl: env['OOUMPH_BRAIN_URL']?.trim() || undefined,
    };
  }
  return {
    edition,
    title: 'Ooumph Code',
    subtitle: 'World edition · open AI coding agent by Ooumph · runs on your own machine',
    baseUrl: OLLAMA_URL,
    model: chosen || DEFAULT_LOCAL_MODEL,
  };
}

/**
 * Seeds the OpenAI-compatible provider variables for the edition before the
 * CLI reads them. Returns the profile that was applied.
 */
export function applyEditionDefaults(env: Env): EditionProfile {
  const profile = editionProfile(env);
  const userConfigured = Boolean(env['OPENAI_BASE_URL'] || env['OPENAI_API_KEY']);
  if (!userConfigured) {
    env['OPENAI_BASE_URL'] = profile.baseUrl;
    env['OPENAI_API_KEY'] = LOCAL_PLACEHOLDER_KEY;
    env['OPENAI_MODEL'] ??= profile.model;
  }
  return profile;
}

export function editionTitle(env: Env = process.env): string {
  return editionProfile(env).title;
}

export function editionSubtitle(env: Env = process.env): string {
  return editionProfile(env).subtitle;
}
