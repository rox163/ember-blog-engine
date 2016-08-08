import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-picker', 'Integration | Component | date picker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{date-picker}}`);

  assert.equal(this.$('.test-div').text().trim(), 'Hello from the engine');

  // Template block usage:
  // this.render(hbs`
  //   {{#date-picker}}
  //     template block text
  //   {{/date-picker}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
