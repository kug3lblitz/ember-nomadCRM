import AuthenticatedRouteMixin from 'simple-auth/mixins/Authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
      return this.store.createRecord('person');
    }
});
