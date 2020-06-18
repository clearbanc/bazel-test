import { get } from 'lodash';

import { log } from '@clearbanc/logger';
const foo = require('bazel_test/app/data/foo.json');

log(get(foo, 'bar'));
