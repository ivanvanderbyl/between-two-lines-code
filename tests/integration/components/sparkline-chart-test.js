import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sparkline-chart', 'Integration | Component | sparkline chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sparkline-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sparkline-chart}}
      template block text
    {{/sparkline-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
