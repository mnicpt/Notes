import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['table_view_cell'],
    classNameBindings: ['selected'],
    model: null,
    editMode: false,
    title: "",
    subtitle: "",
    selected: Ember.computed.alias('model.selected'),

    actions: {
        select() {
            this.get('selectRow')(this.get('model'));
            this.set('selected', true);
        },
        edit() {
            this.toggleProperty('model.edit');
        }
    }
});
