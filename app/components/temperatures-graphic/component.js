import Ember from 'ember';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import Margin from '../../mixins/margin';
import Dimensions from '../../mixins/dimensions';

const { computed } = Ember;

export default Ember.Component.extend(Margin, Dimensions, {
  tagName: 'svg',

  classNames: ['temperature-graphic'],

  attributeBindings: ['width', 'height'],

  width: 1024,
  height: 400,

  /**
   * Represents values for the line.
   *
   * @type {Array[Array[2]]}
   */
  values: [],

  margin: {
    top: 16,
    right: 32,
    bottom: 40,
    left: 32,
  },

  tickFormatFunction: computed(function(){
    return timeFormat("%A %H:%M");
  }),

  xRange: computed('plotArea.width', {
    get() {
      return [0, this.get('plotArea.width')];
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

  yRange: computed('plotArea.height', {
    get() {
      return [this.get('plotArea.height'), 0];
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
