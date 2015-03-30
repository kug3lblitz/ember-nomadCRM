import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('person');
    }
});
