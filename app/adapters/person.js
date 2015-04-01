import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  save: function(name, person) {
    /* jshint unused: false */
    if(person.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Person/" + person.id,
        type: "PUT",
        data: JSON.stringify(person.toJSON())
      }).then(function(response) {
        person.updatedAt = response.updatedAt;
        person.sessionToken = response.sessionToken;
        return person;
      });

    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/Person",
        type: "POST",
        data: JSON.stringify(person.toJSON())
      }).then(function(response) {
        person.id = response.objectId;
        person.createdAt = response.createdAt;
        person.sessionToken = response.sessionToken;
        return person;
      });
    }
  },

  findAll: function(name, person){
    var userId = this.get('session.currentUser.id');

    return ajax("https://api.parse.com/1/classes/Person/", {
      data: {
          where: JSON.stringify({
              "createdBy": {
                  "__type": "Pointer",
                  "className": "_User",
                  "objectId": userId
              }
          })
      }
    }).then(function(response){
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

  destroy: function(name, person) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Person/" + person.id,
      type: "DELETE"
    });
  },
});
