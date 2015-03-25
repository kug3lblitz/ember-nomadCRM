import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Person/" + id).then(function(user){
      user.id = user.objectId;
      delete user.objectId;
      return user;
    });
  },

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Person/" + record.id,
        type: "PUT",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
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
  }

//export default Ember.Object.extend({
  //find: function(name, id){
    //var dispRecord;
    //return ajax("https://api.parse.com/1/classes/Person/" + id + "?include=createdBy").then(function(response){
      //dispRecord = response;
      //dispRecord.id = dispRecord.objectId;
      //delete dispRecord.objectId;
      //dispRecord.createdBy.id = dispRecord.createdBy.objectId;
      //delete dispRecord.createdBy.objectId;
      //return ajax("https://api.parse.com/1/users/", {
        //type: "GET",
        //data: {
          //where: JSON.stringify({
            //"$relatedTo":{
              //"object":{
                //"__type":"Pointer",
                //"className":"Person",
                //"objectId": id
              //},
              //"key":""
            //}
          //})
        //}
      //});
    //}).then(function(response){
      //dispRecord.persRec = response.results.map(function(persRec) {
       //persRec.id = persRec.objectId;
       //return persRec;
      //});
      //return dispRecord;
    //});
  //}

});
