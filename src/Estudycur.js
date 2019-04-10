const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const estudycurSchema = new Schema({
	nombre : {
		type : String,
		required : true	,
		trim : true
	},
    nombreCurso : {
		type : String,
		required : true
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

estudycurSchema.plugin(uniqueValidator);
const Estudycur = mongoose.model('Estudycur', estudycurSchema);


module.exports = Estudycur;