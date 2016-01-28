import Ember from 'ember';
const { computed } = Ember;

export default Ember.Mixin.create({

  width: 0,

  height: 0,

  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  plotArea: computed('width', 'height', {
    get() {
      let height = this.get('height'),
        width = this.get('width'),
        margin = this.get('margin');

      return {
        top: margin.top,
        left: margin.left,
        bottom: height - margin.top,
        right: width - margin.right,
        height: height - margin.top - margin.bottom,
        width: width - margin.left - margin.right,
        outerWidth: width,
        outerHeight: height,
      };
    }
  }),

});
