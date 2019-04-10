const hbs = require('hbs');



hbs.registerHelper('listaEI',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Telefono</th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombre}</td>
                <td>${curso.documento}</td>
                <td>${curso.correo}</td>
                <td>${curso.telefono}</td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listaEs', (listado) => {
    let texto = `   <table class='table table-striped table-hover'> 
                    <thead class='thead-dark'>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Correo</th>
                    <th>Telefono</th>                    
                    <th>Rol</th>
                    <th></th>
                    <th></th>
                    </thead>
                    <tbody>`;
        listado.forEach(estudiante =>{
            texto = texto + 
                    `<tr>
                    <td> ${estudiante.nombre} </td>
                    <td> ${estudiante.documento} </td>
                    <td> ${estudiante.correo}</td>
                    <td> ${estudiante.telefono} </td>
                    <td> ${estudiante.rol} </td>
                    <td><form class="form-inline my-2 my-lg-0" action="/modifique"  method="post"><input class="form-control mr-sm-2" type="text" name="nombre" placeholder="Nombre" value= "${estudiante.nombre}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Modificar</button></form></td>
                    <td><form class="form-inline my-2 my-lg-0" action="/elimine"  method="post"><input class="form-control mr-sm-2" type="text" name="nombre" placeholder="Nombreo" value= "${estudiante.nombre}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Eliminar</button></form></td></tr>`;
        
        })
        texto = texto + '</tbody> </table></form>';	
        return texto;
    
    });
 
hbs.registerHelper('listaC',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th>Intensidad</th>
                <th>Modalidad</th>
                <th>Estado</th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.id} </td>
                <td>${curso.nombreCurso}</td>
                <td>${curso.descripcion}</td>
                <td>${curso.valor}</td>
                <td>${curso.intensidad}</td>
                <td>${curso.modalidad}</td>
                <td>${curso.Estado}</td>
                <td><form class="form-inline my-2 my-lg-0" action="/Celiminado"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Eliminar</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listaCu',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th></th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombreCurso}</td>
                <td>${curso.descripcion}</td>
                <td>${curso.valor} </td>
                <td><form class="form-inline my-2 my-lg-0" action="/muestramas"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Mostrar Más</button></form></td>
                <td><form class="form-inline my-2 my-lg-0" action="/inscripcion"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Inscribir</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listaCur',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th>Modalidad</th>
                <th>Intensidad</th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombreCurso}</td>
                <td>${curso.descripcion}</td>
                <td>${curso.valor} </td>
                <td>${curso.modalidad} </td>
                <td>${curso.Intensidad} </td>
                <td><form class="form-inline my-2 my-lg-0" action="/inscripcion"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Inscribir</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listaP',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th>Modalidad</th>
                <th>Intensidad</th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombreCurso}</td>
                <td>${curso.descripcion}</td>
                <td>${curso.valor} </td>
                <td>${curso.modalidad} </td>
                <td>${curso.Intensidad} </td>
                <td><form class="form-inline my-2 my-lg-0" action="/inscriptos2"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Información</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listain',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre del Curso</th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombreCurso}</td>
                <td><form class="form-inline my-2 my-lg-0" action="/desinscripcion"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >nscribir</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
         
})
hbs.registerHelper('listaE',(cursos)=>{
    let texto = `<table class='table table-striped table-hover'> 
                <thead class='thead-dark'>
                <th>Nombre del Curso</th>
                <th>Nombre</th>
                <th></th>
                <th></th>
                </thead>
                <tbody>`;
                          
    cursos.forEach(curso =>{
                texto = texto +
                `<tr>
                <td>${curso.nombreCurso}</td>
                <td>${curso.nombre}</td>
                <td><form class="form-inline my-2 my-lg-0" action="/eliminado"  method="post"><input class="form-control mr-sm-2" type="text" name="nombre" placeholder="Nombre del Estudiante" value= "${curso.nombre}"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del curso" value= "${curso.nombreCurso}"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Eliminar</button></form></td>
                <td><form class="form-inline my-2 my-lg-0" action="/cerrado"  method="post"><input class="form-control mr-sm-2" type="text" name="nombreCurso" placeholder="Nombre del Curso" value= "${curso.nombreCurso}"><input class="form-control mr-sm-2" type="text" name="nombreProfesor" placeholder="Nombre del Profesor"><button class="btn btn-primary my-2 my-sm-0" type="submit" >Cerrar Curso</button></form></td></tr>`;
            })
            texto = texto + '</tbody></table>';
            return texto;
    
         
})
