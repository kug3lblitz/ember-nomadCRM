import ajax from 'ic-ajax';
import Model from 'ember-magic-man/model';

export default Model.extend({
  addRecord: function(person) {
    return ajax("https://api.parse.com/1/users/" + this.id, {
      type: "PUT",
      data: JSON.stringify({
        favorites: {
          __op: "AddRelation",
          objects: [
            {
              __type: 'Pointer',
              className: 'person',
              objectId: record.id
            }
          ]
        }
      })
    });
  }
});
