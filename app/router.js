import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("/");
    //this.resource('person', { path: ':person_name'}
    this.resource("people", function() {
        this.route("new");
    });
    this.route("login");
    this.route("register");
    this.route("pullRec");
});

export default Router;
