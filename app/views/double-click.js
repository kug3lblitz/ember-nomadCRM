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
          this.save();
        },

        save: function() {
          var parentView = this.get('parentView');
          var controller = parentView.get('controller');

          if (controller.save) {
            controller.save();
          }
          parentView.set('isEditing', false);
        },
    })

});
