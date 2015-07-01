// path/to/your/ember-cli-app/app/adapters/application.js
import DS from 'ember-data';
import $ from 'jquery';

export default DS.RESTAdapter.extend({
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  }
});
