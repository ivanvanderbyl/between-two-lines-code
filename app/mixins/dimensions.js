import Ember from 'ember';

const {
  run: { next },
} = Ember;

export default Ember.Mixin.create({

  didInsertElement() {
    next(this, function() {
      this.measureDimensions();
    });
  },

  measureDimensions() {
    const rect = this.element.getBoundingClientRect();
    this.setProperties({
      width: rect.width,
      height: rect.height,
    });
  },
});
