import ajax from 'ic-ajax';
import Model from 'ember-magic-man/model';

export default Model.extend({
  saveRecord: function(person) {
    return ajax("https://api.parse.com/1/classes/Person/" + this.id, {
      type: "PUT",
      data: JSON.stringify({
        favorites: {
          __op: "AddRelation",
          objects: [
            {
              __type: 'Pointer',
              className: 'Person',
              objectId: bookmark.id
            }
          ]
        }
      })
    });
  }
});
