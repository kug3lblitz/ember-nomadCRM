import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('login', {path: '/'});
    this.route("register");
    this.route('search', { path: '/search/:term' });
    this.route("records");
    this.resource("people", function() {
        this.route("new");
    });
    this.route("pullRec");
});

export default Router;
