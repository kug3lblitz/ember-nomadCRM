import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';
import ENV from 'ember-nomad-crm/config/environment';

export default Base.extend({
  authorize: function(jqXHR) {
    jqXHR.setRequestHeader("X-Parse-Application-Id", ENV.parseKeys.applicationId);
    jqXHR.setRequestHeader("X-Parse-REST-API-Key", ENV.parseKeys.restApi);

    //var sessionToken = this.get('session.sessionToken');
    //if (!Ember.isEmpty(sessionToken)) {
      //jqXHR.setRequestHeader('X-Parse-Session-Token', sessionToken);
    //}
  }
});
