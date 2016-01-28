import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slides', function() {
    this.route('simple-line');
  });
});

export default Router;
