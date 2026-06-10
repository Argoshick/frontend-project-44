#!/usr/bin/env node

import cli from '../src/cli.js';
import playEvenGame from '../src/games/even.js';

const userName = cli();
playEvenGame(userName);