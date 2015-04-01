import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    return ajax("https://api.parse.com/1/functions/search", {
      type: "POST",
      data: JSON.stringify({search: params.term})
    }).then(function(response) {
      return response.result;
    });
  }
});
