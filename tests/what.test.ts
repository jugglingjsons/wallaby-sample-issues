import what from '../src/importing.js';
import { DuplicateStatus } from '../src/weird.js';



describe('test', function () {
  context('sample', function () {
    it('should work', function () {
      const result = what(DuplicateStatus.Pending);
      if (result !== true) {
        throw new Error('Test failed');
      }
    });
  });
});