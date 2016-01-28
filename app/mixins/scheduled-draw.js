import Ember from 'ember';
import { select } from 'd3-selection';
const {
  run: { scheduleOnce }
} = Ember;

export default Ember.Mixin.create({

  didInsertElement() {
    this.groupElement = select(this.element);
  },

  didReceiveAttrs() {
    this.scheduleRedraw();
  },

  scheduleRedraw() {
    scheduleOnce('render', this, this.drawLine);
  },

  drawLine: Ember.K,
});
