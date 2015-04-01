import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Person/" + record.id,
        type: "PUT",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        record.sessionToken = response.sessionToken;
        return record;
      });

    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/Person",
        type: "POST",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.id = response.objectId;
        record.createdAt = response.createdAt;
        record.sessionToken = response.sessionToken;
        return record;
      });
    }
  },

  findAll: function(name, record){
    return ajax("https://api.parse.com/1/classes/Person/").then(function(response){
        return response.results.map(function(person){
            person.id = person.objectId;
            delete person.objectId;
            return person;
            });
        });
    },

  find: function(name, id){
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Person/").then(function(user){
      user.id = user.objectId;
      delete user.objectId;
      return user;
    });
  },
 
  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Person", {
      data: Ember.$.param({
              where: JSON.stringify(query)
            })
    }).then(function(response){
      return response.results.map(function(person) {
        person.id = person.objectId;
        delete person.objectId;
        return person;
      });
    });
  },

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Person/" + record.id,
      type: "DELETE"
    });
  },
});
