import * as Koa from 'koa';
import { get } from 'lodash';

import { log } from '@clearbanc/logger';
const { trim } = require('bazel_test/app/src/utils');
const foo = require('bazel_test/app/data/foo.json');

const BAR = trim(get(foo, 'bar'));

const app = new Koa();

app.use((ctx) => {
  log('=== LOG ===', BAR);
  ctx.body = BAR;
});

app.listen(3000);
