import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      createRecord: function(){
        this.get('model').save();
      }
    }
});
