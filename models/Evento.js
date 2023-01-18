const { Schema , model } = require("mongoose");

const EventoSchema = Schema({

    title: {
        type: String
        ,required: true
    }
    ,notes : {
        type: String        
    }
    ,start : {
        type: Date
        ,required: true
    }
    ,end : {
        type: Date
        ,required: true
    }
    ,user : {
        type: Schema.Types.ObjectId //Esto seria para saber que es referencia al modelo de usuario
        ,ref: 'Usuario'
        ,required: true
    }

});

//Como se serialize moongose
EventoSchema.method('toJSON' , function () {

    const { __v , _id , ...object } = this.toObject();
    object.id = _id;
    return object;

})

module.exports = model('Evento' , EventoSchema );