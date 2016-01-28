import Ember from 'ember';
import ScheduledDrawMixin from '../../../mixins/scheduled-draw';
import { module, test } from 'qunit';

module('Unit | Mixin | scheduled draw');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScheduledDrawObject = Ember.Object.extend(ScheduledDrawMixin);
  let subject = ScheduledDrawObject.create();
  assert.ok(subject);
});
