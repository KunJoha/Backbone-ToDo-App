var TodoView = Backbone.View.extend({
    
    // reference to DOM element
    tagName: 'li', 
    // set class names for the given DOM element or ...
    className: 'container homepage',
    // ... ids for example
    id: 'todos',

    todoTpl: _.template("An example template"),

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit'    : 'close'
    },

    initialize: function(options) {
        this.options = options || {};
    },

    render: function(){
        this.$el.html( this.todoTpl(this.model.attributes));
        this.input = this.$('.edit');
        return this;
    },

    edit: function() {

    },

    close: function() {

    },

    updateOnEnter: function( e ) {

    }
});

var todoView = new TodoView();

console.log(todoView.el)