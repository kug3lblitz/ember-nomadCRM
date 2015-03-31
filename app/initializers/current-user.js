import Ember from "ember";
import Session from "simple-auth/session";
import ajax from 'ic-ajax';

export function initialize(container, application) {

  application.inject('authenticator:parse-email', 'store', 'store:main');

  Session.reopen({
    setCurrentUser: function() {
      var token = this.get('sessionToken');

      if (this.get('isAuthenticated') && !Ember.isEmpty(token)) {
        var store = container.lookup('store:main');
        ajax('https://api.parse.com/1/users/me').then(function(response) {
          response.id = response.objectId;
          delete response.objectId;
          delete response.sessionToken;
          var user = store.push('user', response);
          this.set('currentUser', user);
        }.bind(this));
      }
    }.observes('sessionToken')
  });
}

export default {
  name: 'current-user',
  initialize: initialize
};
