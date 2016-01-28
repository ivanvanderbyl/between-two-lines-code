import Ember from 'ember';
import ScheduledDraw from '../../mixins/scheduled-draw';
import { line, curveStepAfter } from 'd3-shape';

function lineFn(xScale, yScale) {
  return line()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]))
    .defined((d) => d && d[1] > 0 && !isNaN(d[0]))
    .curve(curveStepAfter);
}

const SimpleLineComponent = Ember.Component.extend(ScheduledDraw, {
  classNames: ['simpe-line'],
  tagName: 'g',

  xScale: null,

  ySCale: null,

  /**
   * Values to render on the line.
   *
   * @required
   * @type {Array[Array[2], ...]}
   */
  values: [],

  /**
   * Line color
   *
   * @type {String}
   */
  color: "#673AB7",

  /**
   * Stroke width in units
   *
   * @type {Number}
   */
  strokeWidth: 2,

  // Positioning
  top: 0,
  left: 0,

  drawLine() {
    const { values, color, strokeWidth, xScale, yScale }
      = this.getProperties('values', 'color', 'strokeWidth', 'xScale', 'yScale');

    const { top, left } = this.getProperties('top', 'left');

    this.groupElement.attr('transform', `translate(${left}, ${top})`);

    const line = lineFn(xScale, yScale);
    const lineJoin = this.groupElement.selectAll('path.line')
      .data([values]);

    lineJoin.enter().append('path').classed('line', true);
    lineJoin.exit().remove();

    lineJoin
      .attr('stroke', color)
      .attr('stroke-width', strokeWidth)
      .attr('fill', 'none')
      .attr("d", line);
  }

});

SimpleLineComponent.reopenClass({
  positionalParams: ['values', 'xScale', 'yScale']
});

export default SimpleLineComponent;
