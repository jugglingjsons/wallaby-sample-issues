'use strict';
import { DuplicateStatus } from './weird.js';

export default (what ) =>  {
  return what === DuplicateStatus.Pending && what === DuplicateStatus.Merged;
};