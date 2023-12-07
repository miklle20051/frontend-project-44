#!/usr/bin/env node

import { userName } from '../src/cli.js';
import { even } from '../bin/brain-even.js';
console.log('Welcome to the Brain Games!');
const name = userName();
even(name);
