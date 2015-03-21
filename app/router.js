import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("home");
    this.resource("companies");
    this.resource("people");
});

export default Router;
