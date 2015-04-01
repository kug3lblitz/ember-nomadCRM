import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(){
      var term = this.get('searchTerm');
      this.transitionToRoute('search', term);
      this.set('searchTerm', null);
    }
  }
});
