import ajax from 'ic-ajax';
import Model from 'ember-magic-man/model';

export default Model.extend({

  saveRecord: function(name, record) {
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
  }
});
