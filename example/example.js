// Modul 
var Todo = Backbone.Model.extend({
    //default paramters from the modul
    defaults: {
        completed: false
    },

    // is called after creating new object of this model
    initialize: function() {
        console.log('This Modul has been Initialized!')
        
        // this is called everytime given attribute is changed
        this.on('change', function(){
            console.log('[INFO] - Values for this model have changed.')
        });
        
        // listen on single attribute changes
        this.on('change:completed', function(){
            console.log('[INFO] - completed Paramter changed.')
        });
        
        // check for errors in this modul
        this.on('invalid', function(model, error){
            console.log(error);
        })
    },

    // validates specific data 
    validate: function(attributes) {
        if (!attributes.title === undefined) {
            return 'A title needs to be set.';
        }
    },

    // setter function for attribute:completed
    setCompleted: function(newState){
        this.set({ comlpeted: newState})
    }
});

// create Todo Model
var myTodo = new Todo();

// or with some data:
var todo2 = new Todo({
  title: 'Getting data with get() functionality'
});

// setting model attributes via set()
myTodo.set('completed', true, {validate: true})

// setter via function from Modul
myTodo.setCompleted(true)

// getter for attribute
todo2.get('title')

// retrieve mytodos attributes as an object
myTodo.toJSON()