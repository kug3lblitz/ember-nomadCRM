import ajax from 'ic-ajax';
import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  sessionToken: null,

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if(!Ember.isEmpty(data.sessionToken)){
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var token = credentials.sessionToken;
    var endpoint = token ? 'users/me' : 'login';
    var options = token ? {
      headers: {
        'X-Parse-Session-Token': token
      }
    } : {
      data: {
        username: credentials.identification,
        password: credentials.password
      }
    };

    return ajax('https://api.parse.com/1/' + endpoint, options).then(function(response) {
      response.id = response.objectId;
      delete response.objectId;
      var user = this.store.push('user', response);
      return {sessionToken: response.sessionToken, currentUser: user};
    }.bind(this));
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  }
});
