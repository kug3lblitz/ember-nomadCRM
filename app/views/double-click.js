import Ember from 'ember';
import layout from '../templates/double-click';

export default Ember.View.extend({
    layout: layout,
    doubleClick: function() {
        if (!this.get('isEditing'))  {
          this.set('isEditing', true);
          Ember.run.scheduleOnce('afterRender', this, this.focusTextField);
        }
    },

    focusTextField: function() {
        var val = this.$('input').val();
        this.$('input').focus();

        this.$('input').val('');
        this.$('input').val(val);
    },

    textField: Ember.TextField.extend({
        focusOut: function() {
          this.saveRecord();
          this.save();
        },

        save: function() {
          var parentView = this.get('parentView');
          var controller = parentView.get('controller');

          if (controller.save) {
            controller.save();
          }
          parentView.set('isEditing', false);
        }
    }),

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
