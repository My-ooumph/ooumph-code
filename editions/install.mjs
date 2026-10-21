#!/usr/bin/env node
/**
 * @license
 * Copyright 2026 Myooumph Networks Private Limited
 * SPDX-License-Identifier: Apache-2.0
 */

// Applies an Ooumph Code edition to this machine's user settings (~/.qwen/settings.json).
//
//   node editions/install.mjs company   # Ooumph employees: FLM brain network
//   node editions/install.mjs world     # everyone else
//
// The existing settings file is copied to settings.json.bak-<timestamp> first. Edition keys
// are merged in: objects merge key by key, everything else is replaced by the edition value,
// and keys the edition does not mention are left as they were.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const EDITIONS = ['company', 'world'];

function merge(base, extra) {
  const out = { ...base };
  for (const [key, value] of Object.entries(extra)) {
    const isObject = value && typeof value === 'object' && !Array.isArray(value);
    const baseIsObject = out[key] && typeof out[key] === 'object' && !Array.isArray(out[key]);
    out[key] = isObject && baseIsObject ? merge(out[key], value) : value;
  }
  return out;
}

function main(argv) {
  const edition = argv[0];
  if (!EDITIONS.includes(edition)) {
    console.error(`usage: node editions/install.mjs <${EDITIONS.join('|')}>`);
    return 2;
  }
  const here = path.dirname(fileURLToPath(import.meta.url));
  const editionSettings = JSON.parse(
    fs.readFileSync(path.join(here, edition, 'settings.json'), 'utf8'),
  );

  const dir = path.join(os.homedir(), '.qwen');
  const target = path.join(dir, 'settings.json');
  fs.mkdirSync(dir, { recursive: true });

  let current = {};
  if (fs.existsSync(target)) {
    const backup = `${target}.bak-${new Date().toISOString().replace(/[:.]/g, '-')}`;
    fs.copyFileSync(target, backup);
    console.log(`backed up existing settings to ${backup}`);
    try {
      current = JSON.parse(fs.readFileSync(target, 'utf8'));
    } catch {
      console.error(`${target} is not plain JSON (comments?); left untouched. Merge editions/${edition}/settings.json by hand.`);
      return 1;
    }
  }

  fs.writeFileSync(target, JSON.stringify(merge(current, editionSettings), null, 2) + '\n');
  console.log(`Ooumph Code ${edition} edition applied to ${target}`);
  console.log('Next: install Ollama (https://ollama.com), then run: ollama pull qwen3:1.7b');
  console.log('Start with: ooumph   (or: qwen)');
  return 0;
}

process.exit(main(process.argv.slice(2)));
