import Ember from 'ember';
import MarginMixin from '../../../mixins/margin';
import { module, test } from 'qunit';

module('Unit | Mixin | margin');

// Replace this with your real tests.
test('it works', function(assert) {
  let MarginObject = Ember.Object.extend(MarginMixin);
  let subject = MarginObject.create();
  assert.ok(subject);
});
