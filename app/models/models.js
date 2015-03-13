import Ember from "ember";
import DS from "ember-data";

var App = Ember.Application.create();

App.Taskable = DS.Model.extend({
    
    tasks: DS.hasMany('task', {async: true})
});

App.Task = DS.Model.extend({

    subject: DS.attr('string'),

    taskable: DS.belongsTo('taskable', {polymorphic: true})
});

App.Company = App.Taskable.extend({
    
    name: DS.attr('string'),
    people: DS.hasMany('person', {async: true})
});

App.Person = App.Taskable.extend({
    
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    email: DS.attr('string'),

    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName'),

    location: function() {
        var location = this.get('city');
        var state = this.get('state');
        
        if (state && state.trim().length > 0) {
            location += ', ' + state;
        }

        return location;
    }.property('city', 'state'),

    company: DS.belongsTo('company', {async: true})
});
