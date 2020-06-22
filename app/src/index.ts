import { get } from 'lodash';

import { log } from '@clearbanc/logger';
const { trim } = require('bazel_test/app/src/utils');
const foo = require('bazel_test/app/data/foo.json');

log(trim(get(foo, 'bar')));
