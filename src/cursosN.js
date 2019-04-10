const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const cursoSchema = new Schema({
	nombreCurso : {
		type : String,
		required : true
	},
    id:{
        type: Number,
        required: true
    },
	descripcion :{
        type : String,
        requiered: true
	},
	valor : {
		type: Number,
		required: true	
	},
	modalidad : {
		type : String
	},
	Intensidad : {
		type: Number
	},
	Estado : {
		type: String,
		default: 'Disponible'
	},
	Profesor : {
		type: String,
		default: '-'
	}
});

cursoSchema.plugin(uniqueValidator);
const Ncurso = mongoose.model('Ncurso', cursoSchema);

module.exports = Ncurso;