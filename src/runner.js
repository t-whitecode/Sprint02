require('../config/config');
const express = require('express')
const app = express ()
const path = require('path')
const hbs = require ('hbs')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const Estudiante = require('./estudiante')
const Ncurso = require('./cursosN')
const Estudycur = require('./Estudycur')
const bcrypt = require('bcrypt');
const session = require ('express-session')

require('./helpers');

const directoriopublico = path.join(__dirname,'../public')
app.use(express.static(directoriopublico));

const directoriopartials = path.join(__dirname,'../partials');
hbs.registerPartials(directoriopartials);

const dirNode_modules = path.join(__dirname, '../node_modules')
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false}))

app.use (session({
    secret: 'keyboard cat',
    resave: false,
    saveUnitialized: true
}))

app.get('/', (req, res ) => {
	res.render('inicio', {
		titulo: 'Inicio',
	})	
});

app.post('/', (req, res ) => {
	let estudiante = new Estudiante ({
        nombre: req.body.nombre,
        contraseña: bcrypt.hashSync(req.body.contraseña, 15),
        rol: req.body.rol,
        documento: req.body.documento,
        correo: req.body.correo,
        telefono: req.body.telefono
        })
        estudiante.save((err, resultado) => {
            if (err){
                return res.render ('indexpost', {
                    mostrar : err
                })			
            }		
            res.render ('indexpost', {			
                    mostrar : resultado.nombre
                })		
        })			
    });

app.post('/crearC', (req, res ) => {
	let cursoC = new Ncurso ({
        nombreCurso: req.body.nombre,
        id: req.body.id,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        modalidad : req.body.modalidad,
        Intensidad : parseInt(req.body.intensidad),
        Estado : 'disponible'
        })
        cursoC.save((err, respuesta) => {
            if (err){
                return res.render ('indexpost',{
                    mostrar: err
                })			
            }		
            res.render ('creado',{
                curso : respuesta.nombreCurso
            })	
        })			
    });
app.post('/inscripcion', (req, res ) => {
    Estudiante.findOne({nombre : req.session.nombre}, (err, resultados) => {
    if (err){
        return res.render ('error', {
            mostrar : err
        }) 
    }
    let estudycur = new Estudycur ({
        nombre: resultados.nombre,
        nombreCurso:  req.body.nombreCurso,
        documento: resultados.documento,
        correo: resultados.correo,
        telefono: resultados.telefono
        })
        estudycur.save((err, resultado) => {
            if (err){
                return res.render ('error', {
                    mostrar : err
                })			
            }		
            res.render ('inscripcion', {			
                    mostrar : resultado.nombre,
                    mostrar1 : resultado.nombreCurso
                })		
        })			
    });
});

app.get('/listar',(req,res)=>{
    Ncurso.find({Estado : 'disponible'}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('listar',{
            cursos : respuesta
        })
    })
})
app.get('/cursos',(req,res)=>{
    Ncurso.find({}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('cursos',{
            cursos : respuesta
        })
    })
})
app.get('/gestionar',(req,res)=>{
    Estudiante.find({}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('gestionar',{
            cursos : respuesta
        })
    })
})
app.get('/inscriptos',(req,res)=>{
    Estudycur.find({}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('Estudiantes',{
            cursos : respuesta
        })
    })
})
app.post('/inscriptos2',(req,res)=>{
    Estudycur.find({nombreCurso: req.body.nombreCurso}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('inscriptos2',{
            cursos : respuesta
        })
    })
})
app.get('/misC',(req,res)=>{
    Ncurso.find({Profesor: req.session.nombre}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('misC',{
            cursos : respuesta
        })
    })
})
app.get('/inicio', (req, res ) => {
	res.render('inicio')	
});
app.get('/salir', (req, res) => {
	req.session.destroy((err) => {
  		if (err) return console.log(err) 	
	})	
	// localStorage.setItem('token', '');
	res.redirect('/')	
})

app.get('/inscriptos2',(req,res)=>{
    Estudycur.find({nombre: req.session.nombre}).exec((err,respuesta)=>{
        if(err){
            return console.log('su error fue'+err)
        }
        res.render ('inscriptos',{
            cursos : respuesta
        })
    })
})
app.post('/ingresar', (req, res) => {	
	Estudiante.findOne({nombre : req.body.usuario}, (err, resultados) => {
		if (err){
			return console.log(err)
		}
		if(!resultados){
			return res.render ('ingresar', {
			mensaje : "Usuario no encontrado"			
			})
		}
		if(!bcrypt.compareSync(req.body.password, resultados.contraseña)){
			return res.render ('ingresar', {
			mensaje : "Contraseña no es correcta"			
			})
		}	
			//Para crear las variables de sesión
			req.session.usuario = resultados.documento	
			req.session.nombre = resultados.nombre
            req.session.rol = resultados.rol

            if(resultados.rol == 'Aspirante') {
                res.render('ingresar', {
                    mensaje : "Bienvenido " + resultados.nombre,
                    nombre : resultados.nombre,
                    sesion1 : true						
                    })
            }
            if (resultados.rol == 'Profesor') {
                res.render('ingresar', {
                    mensaje : "Bienvenido Profesor " + resultados.nombre,
                    nombre : resultados.nombre,
                    sesion2 : true						
                    })
            }
            else {
                res.render('ingresar', {
                    mensaje : "Bienvenido Coordinador " + resultados.nombre,
                    nombre : resultados.nombre,
                    sesion3 : true						
                    })
            }
	})
})
app.post('/cerrado', (req, res) => {	
	Ncurso.findOneAndUpdate({nombreCurso : req.body.nombreCurso},{Estado: 'No Disponible',Profesor: req.body.nombreProfesor},{new : true, runValidators: true, context: 'query' }, (err, resultados) => {
		if (err){
			return console.log(err)
		}
		if(!resultados){
			return res.render ('ingresar', {
			mensaje : "Curso no encontrado."			
			})
        }
        res.render ('cerrado', {
            curso : resultados.nombreCurso,
            estado: resultados.Estado,
            profesor: resultados.Profesor			
		})
		
	})	
})
app.post('/modifique', (req, res) => {	
	Estudiante.findOneAndUpdate({nombre : req.body.nombre},{rol: 'Profesor'},{new : true, runValidators: true, context: 'query' }, (err, resultados) => {
		if (err){
			return console.log(err)
		}
		if(!resultados){
			return res.render ('ingresar', {
			mensaje : "Alumno no Encontrado."			
			})
        }
        res.render ('modifique', {
            alumno : resultados.nombre,
            rol: resultados.rol		
		})
		
	})	
})
app.get('/crearC', (req, res ) => {
	res.render('crearC')	
});




app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404",		
	})
});


app.post('/eliminado', (req, res) => {
	
	Estudycur.findOneAndDelete({nombre : req.body.nombre, nombreCurso : req.body.nombreCurso}, req.body, (err, resultados) => {
		if (err){
			return console.log(err)
		}

		if(!resultados){
			res.render ('eliminado', {
			nombre : "no encontrado"			
		})

		}

		res.render ('eliminado', {
			nombre : resultados.nombre			
		})
	})	
})
app.post('/desinscripcion', (req, res) => {
	
	Estudiante.findOneAndDelete({nombre : req.session.nombre, nombreCurso: req.body.nombreCurso}, req.body, (err, resultados) => {
		if (err){
			return console.log(err)
		}

		if(!resultados){
			res.render ('eliminado', {
			nombre : "no encontrado"			
		})

		}

		res.render ('eliminado', {
			nombre : resultados.nombre			
		})
	})	
})
app.post('/muestramas', (req, res) => {	

    Ncurso.find({nombreCurso: req.body.nombreCurso}).exec((err, curso) =>{
        //Estudiante.findById(req.usuario, (err, usuario) =>{
        if (err){
            return console.log(err)
        }

        if (!curso){
        return 'Escribió mal el nombre'
    }
        res.render ('muestramas',{
            curso: curso
        })
    });
})
app.post('/Celiminado', (req, res) => {
	
	Ncurso.findOneAndDelete({nombreCurso: req.body.nombreCurso}, req.body, (err, resultados) => {
		if (err){
			return console.log(err)
		}

		if(!resultados){
			res.render ('Celiminado', {
			Cnombre : "no encontrado"			
		})

		}

		res.render ('Celiminado', {
            Cnombre : resultados.nombreCurso
            		
        })
        Ncurso.find({}).exec((err,respuesta)=>{
                if(err){
                    return console.log('su error fue'+err)
                }
                res.render ('Celiminado',{
                    cursos : respuesta
                })
            })
	})	
})



module.exports = app
