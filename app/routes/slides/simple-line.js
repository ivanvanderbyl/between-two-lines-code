import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const pointCount = 120;
    const startTime = (new Date()).valueOf();

    let i = 0;

    let values = [];

    while(++i < pointCount) {
      values.push([startTime + i * 1e3, Math.random() * 100]);
    }

    return values;
  },

  setupController(controller, values) {
    controller.setProperties({ values });
  }

});
