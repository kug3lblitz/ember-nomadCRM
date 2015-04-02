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


//import Ember from 'ember';
//import ajax from 'ic-ajax';

//export default Ember.Route.extend({

//model: function() {
    //return person;
  //}
//});

//Ember.Handlebars.helper('search', Ember.View.extend({
  //templateName: 'autocomplete',
  
  //filteredList: function() {
    //var list = this.get('record'),
        //filter = this.get('filter');

    //if (!filter) { return list; }
    
    //return list.filter(function(item) {
      //return item.name.indexOf(filter) !== -1;
    //});
  //}.property('list.@each', 'filter')
//}));
