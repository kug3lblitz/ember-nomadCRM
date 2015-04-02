import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function(){
            this.get('model').save().then(function(user){
                this.get('session').authenticate('authenticator:parse-email', user).then(function(){
                    this.transitionToRoute('records');
                }.bind(this));
            }.bind(this));
        },
    }
});
