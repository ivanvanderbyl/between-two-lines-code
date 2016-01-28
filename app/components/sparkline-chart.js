import Ember from 'ember';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
const { computed } = Ember;

function computedExtent(...props) {
  let accessor = (d) => d;
  if (Ember.typeOf(props[props.length-1]) === 'function') {
    accessor = props.pop();
  }

  let dependendentProps = props.filter((p) => typeof(p) === 'string');
  return computed(dependendentProps, {
    get() {
      const deps = props.map((prop) => {
        if (typeof prop === 'string') {
          return this.get(prop);
        }else{
          return prop;
        }
      });

      if (props.length === 1) {
        return extent(deps[0], accessor);
      }else{
        return extent(deps, accessor);
      }
    }
  });
}

function computedScale(scalerFn, domain, range) {
  return computed(domain, range, {
    get() {
      return scalerFn().domain(this.get(domain)).range(this.get(range));
    }
  });
}

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: ['sparkline'],

  attributeBindings: ['width', 'height'],

  width: 1024,
  height: 400,

  values: [],

  xRange: computedExtent(0, 'width'),
  xDomain: computedExtent('values', (d) => d[0]),
  xScale: computedScale(scaleLinear, 'xDomain', 'xRange'),

  yRange: computedExtent('height', 0),
  yDomain: computedExtent('values', (d) => d[1]),
  yScale: computedScale(scaleLinear, 'yDomain', 'yRange'),

});
