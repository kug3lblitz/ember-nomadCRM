import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      createRecord: function(){
        this.get('model').save().then(function(){
            this.transitionToRoute('records');
        }.bind(this));
      },
        editRecord: function() {
            this.set('isEditing', true);
      }
    }
});
