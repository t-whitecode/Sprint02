const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const estudianteSchema = new Schema({
	nombre : {
		type : String,
		required : true	,
		trim : true
	},
    contraseña:{
        type: String,
        required: true
    },
	rol :{
        type : String,
        default: 'Aspirante'
	},
	documento : {
		type: Number,
		required: true	
	},
	correo : {
		type: String,
		required: true					
	},
	telefono : {
		type: Number,
		required: true						
	}
});

estudianteSchema.plugin(uniqueValidator);
const Estudiante = mongoose.model('Estudiante', estudianteSchema);


module.exports = Estudiante;