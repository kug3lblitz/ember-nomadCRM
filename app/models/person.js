import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    company: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
    website: DS.attr('string'),
    industry: DS.attr('string'),
    notes: DS.hasMany('note', {async: true})
});
