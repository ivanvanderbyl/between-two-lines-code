import Ember from 'ember';
import { select } from 'd3-selection';
import { format } from 'd3-format';
import { axisTop, axisRight, axisBottom, axisLeft } from 'd3-axis';

export default Ember.Component.extend({
  tagName: 'g',

  classNames: ['axis'],

  /**
   * Represents the axis orientation. You should always declare this.
   *
   * @type {String}
   */
  orient: 'bottom',

  /**
   * A default tick format
   *
   * @type {String or Function}
   */
  tickFormat: format("s"),

  /**
   * A scaling function used for this axis.
   *
   * @type {Function}
   */
  scale: null,

  height: 200,

  top: 0,

  left: 0,

  didInsertElement() {
    this.groupElement = select(this.element);
    this.drawAxis();
  },

  didReceiveAttrs() {
    Ember.run.scheduleOnce('render', this, this.drawAxis);
  },

  drawAxis() {
    const { orient, scale, height } = this.getProperties('orient', 'scale', 'height');
    const { top, left } = this.getProperties('top', 'left');

    this.groupElement.attr('transform', `translate(${left}, ${top})`);

    if (!this.axis) {
      this.axis = this.createAxis(orient, scale);
    }

    this.axis.scale(scale);

    let tf = this.get('tickFormat');
    if (typeof(tf) === 'string') {
      tf = format(tf);
    }

    this.axis.tickFormat(tf);
    this.groupElement
      .call(this.axis);

    this.groupElement.selectAll(".tick line")
      .attr('y2', height);

    this.groupElement.selectAll('.tick text')
      .style('text-anchor', 'start')
      .attr('x', 8)
      .attr('y', 8);

    // this.groupElement.selectAll('.domain').remove();
  },

  createAxis(orient, scale) {
    let axis;
    switch(orient) {
      case "top":
        axis = axisTop(scale);
        break;
      case "right":
        axis = axisRight(scale);
        break;
      case "bottom":
        axis = axisBottom(scale);
        break;
      case "left":
        axis = axisLeft(scale);
        break;
    }

    return axis;
  }
});
