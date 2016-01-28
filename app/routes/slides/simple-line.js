import Ember from 'ember';

const DARKSKYS_API_URL = "/forecast/b21536c6540c0bf278db7fa381df0012/-37.8136,144.9631?units=si&exclude=currently";
// const API_BASE = "https://api.forecast.io/";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return this.get('ajax').request(DARKSKYS_API_URL);
  },

  setupController(controller, weatherData) {
    let values = this.normalizeHourlyWeatherData(weatherData);
    controller.setProperties({ values });
  },

  normalizeHourlyWeatherData(weatherData) {
    const points = weatherData.hourly.data;
    return points.map(({time, apparentTemperature, temperature}) => [time * 1e3, temperature, apparentTemperature]);
  }

});
