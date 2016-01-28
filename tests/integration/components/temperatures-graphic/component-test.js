import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('temperatures-graphic', 'Integration | Component | temperatures graphic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{temperatures-graphic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#temperatures-graphic}}
      template block text
    {{/temperatures-graphic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
