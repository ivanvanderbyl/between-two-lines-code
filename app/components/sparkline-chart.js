import Ember from 'ember';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: ['sparkline'],

  attributeBindings: ['width', 'height'],

  width: 1024,
  height: 400,

  values: [],

  xRange: computed('width', {
    get() {
      return [0, this.get('width')];
    }
  }),

  xDomain: computed('values.[]', {
    get() {
      const values = this.get('values');
      return extent(values, (d) => d[0]);
    }
  }),

  xScale: computed('xDomain', 'xRange', {
    get() {
      const { xDomain, xRange } = this.getProperties('xDomain', 'xRange');
      return scaleLinear().domain(xDomain).range(xRange);
    }
  }),

  yRange: computed('height', {
    get() {
      return [this.get('height'), 0];
    }
  }),

  yDomain: computed('values.[]', {
    get() {
      const values = this.get('values');
      return extent(values, (d) => d[1]);
    }
  }),

  yScale: computed('yDomain', 'yRange', {
    get() {
      const { yDomain, yRange } = this.getProperties('yDomain', 'yRange');
      return scaleLinear().domain(yDomain).range(yRange);
    }
  }),
});
