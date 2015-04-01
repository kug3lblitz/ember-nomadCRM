import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

    model: function(){
        return this.store.createRecord('user');
    },

    actions: {
        sessionAuthenticationSucceeded:function() {
            this.transitionTo('login');
    }
  }
});

