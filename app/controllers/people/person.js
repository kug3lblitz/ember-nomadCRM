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
    },

    save: function() {
        // Remove is editing property
        this.set('isEditing', false);
        this.get('model').save();
    },
  
    removePerson: function() {
        var person = this.get('model');
        person.destroy();
        person.save();
    }
});
