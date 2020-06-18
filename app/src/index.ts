import { get } from 'lodash';

import { log } from '@clearbanc/logger';

// FIXME: JSON imports currently do not work.
// const foo = require('./foo.json');
const foo = {
  bar: 'baz',
};

log(get(foo, 'bar'));
