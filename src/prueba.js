const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require ('path');
const hbs = require('hbs');
const bodyParser = require ('body-parser');
require('./helpers');

const directoriopublico = path.join(__dirname,'../public')
app.use(express.static(directoriopublico));

const directoriopartials = path.join(__dirname,'../partials');
hbs.registerPartials(directoriopartials);

const dirNode_modules = path.join(__dirname, '../node_modules')
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
 


app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'hbs');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Sprint2';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
/*client.connect(function(err) {
    if (err){
        return console.log('No se ha podido conectar al servidor')
    }
  console.log("conectado");

  const db = client.db(dbName);*/

  const collection = db.collection ('Students');
  app.get('/',(req,res)=>{
    res.render('inicio')
});
/*agregar datos*/
  /*collection.insertOne({
      nombre : 'Santiago',
      matematicas: 4,
      lengua: 4,
      ingles: 5,
      programacion: 5

  },(err,result) =>{
      if (err){
          return console.log('Ha habido un error');
      }
      return console.log(result.ops)
  })*/
/* Hacer busquedas
collection.find({}).toArray((err,result)=>{
    if(err){
        return console.log('No se ha encontrado la busqueda');
    }
    if(!result){
        return console.log('Ningun dato conincide con tu busqueda')
    }
    console.log(result);
})*/

/*actualizar solo a 1-update
collection.updateOne({nombre:"Santiago"},{$set:{matematicas:5}},(err,result)=>{
    if(err){
        return console.log('Ha habido un error')
    }
        return console.log('Se ha actualizado correctamente' + result)
})*/

 /*Hacer busquedas*nombre: 'Andres'

 collection.findOne({},(err,result)=>{
    if(err){
        return console.log('ha habido un error')
    }
    if(!result){
        return console.log('Ningun dato conincide con tu busqueda')
    }
    return console.log(result)
})*/
/* Actualizar varios-updateMany
collection.updateMany({matematicas:5},{$set:{matematicas:3}},(err,result)=>{
    if(err){
        return console.log('Hubo un error')
    }
    return console.log('Se a actualizado correctamente' +result)
})*/
/* actualizar varios aumentando o disminuyendo un valor
collection.updateMany({matematicas:5},{$inc:{matematicas:-2}},(err,result)=>{
    if(err){
        return console.log('Hubo un error')
    }
    return console.log('Se a actualizado correctamente' +result)
});*/
/* eliminar solo 1
    collection.deleteOne({nombre: 'Andrea'},(err,resultado)=>{
        if (err){
            return console.log('Hubo un error');
        }
        console.log('se ha eliminado correctamente'+resultado)
    })*/
    /* Eliminar varios
    collection.deleteMany({matematicas:{$lt:4}},(err,resultado)=>{
        if (err){
            return console.log('Hubo un error');
        }
        console.log('se ha eliminado correctamente'+resultado)
    })*/
/*
collection.insertMany([
    {
    nombre: 'Juan',
    programacion: 4,
    ingles: 5,
    matematicas: 4
    },
    {
    nombre: 'Laura',
    programacion: 5,
    ingles: 4,
    matematicas: 3
    },
    {
    nombre: 'Camilo',
    programacion: 4,
    ingles: 5,
    matematicas: 4
    },
    {
    nombre: 'Andrea',
    programacion: 4,
    ingles: 5,
    matematicas: 4
    },],(err,result)=>{
        if(err){
            return console.log('No se ha podido crear los daros');
        }
        console.log('datos creados correctamente')
    })

    collection.find({}).toArray((err,result)=>{
        if(err){
            return console.log('No se ha encontrado la busqueda');
        }
        if(!result){
            return console.log('Ningun dato conincide con tu busqueda')
        }
        console.log(result);
    })*/
    mongoose.connect('mongodb://localhost:27017/Sprint2', {useNewUrlParser: true},(err,resultado)=>{
        if(err){
           return console.log(err) 
        }
        console.log('Conectado')
    });
  client.close();
