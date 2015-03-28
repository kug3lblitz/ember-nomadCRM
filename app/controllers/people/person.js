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
      },
       

  doubleClick: function() {
      console.log("hi");
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

    acceptChanges: function() {
        // Remove is editing property
        this.set('isEditing', false);

        // If the person is empty, delete it
        // otherwise save it with the new title
        if(Ember.isEmpty(this.get('model.title'))) {
            this.send('removePerson');
        } else {
            this.get('model').save();
        }
    },
  
    removePerson: function() {
        var person = this.get('model');
        person.deleteRecord();
        person.save();
    }
  })
 }
});
