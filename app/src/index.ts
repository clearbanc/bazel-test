import { get } from 'lodash';

import { logger } from './utils';

// FIXME: JSON imports currently do not work.
// const foo = require('./foo.json');
const foo = {
  bar: 'baz',
};

logger(get(foo, 'bar'));
