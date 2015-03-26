import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      createRecord: function(){
        this.get('model').save().then(function(){
            this.transitionToRoute('index');
        }.bind(this));
      },
        editRecord: function() {
            this.set('isEditing', true);
      }
    }
});
