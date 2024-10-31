function mostrarProductos(){
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML = "";
    request.onload = function () {
    let data = request.response;
    //console.log(data);  //saber si esta trayendo los datos de la base de datos
    data.forEach(element => {
        table.innerHTML += `
        <tr class="table-dark">
            <td>${element.nombre}</td>
            <td>${element.descripcion}</td>
            <td>${element.codigo}</td>
            <td>${element.stock}</td>
            <td>${element.precio}</td>
            <td>${element.laboratorio}</td>
            <td>${element.ingreso}</td>
            <td>${element.fechaVencimiento}</td>
            <td>
                <button type="button" class="btn btn-primary w-auto" onclick="window.location ='/formProductos.html?id=${element._id}'">Editar</button>
                <button type="button" class="btn btn-danger w-auto" onclick='deleteProductos("${element._id}")'>Eliminar</button>
            </td>
        </tr>
        `
    });
    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">Error al traer los datos</td>
        </tr>
        `
    }
}

function deleteProductos(id) {
    let request = sendRequest('productos/' + id, 'DELETE', '');
    request.onload = function(){
        mostrarProductos();
    }
}

function guardarProductos(){
    let nom = document.getElementById('nombre-n').value
    let des = document.getElementById('descripcion-d').value
    let cod = document.getElementById('codigo-c').value
    let sto = document.getElementById('stock-s').value
    let pre = document.getElementById('precio-p').value
    let lab = document.getElementById('laboratorio-l').value
    let ing = document.getElementById('ingreso-i').value
    let fec = document.getElementById('fechaVencimiento-f').value
    let ima = document.getElementById('ima-i').value
    let data = {'nombre':nom, 'descripcion':des, 'codigo':cod, 'stock':sto, 'precio':pre, 'laboratorio':lab, 'ingreso':ing, 'fechaVencimiento':fec, 'ima':ima}
    let request = sendRequest('productos/', 'POST', data);
    request.onload = function(){
        window.location='productos.html'
    }
    request.onerror = function(){
        console.log("Error al guardar los datos")
    }
}

function cargarDatos(id){
    let request = sendRequest('productos/'+id, 'GET', '');
    let nom = document.getElementById('nombre-n')
    let des = document.getElementById('descripcion-d')
    let cod = document.getElementById('codigo-c')
    let sto = document.getElementById('stock-s')
    let pre = document.getElementById('precio-p')
    let lab = document.getElementById('laboratorio-l')
    let ing = document.getElementById('ingreso-i')
    let fec = document.getElementById('fechaVencimiento-f')
    let ima = document.getElementById('ima-i')

    request.onload = function(){
        let data = request.response;
        nom.value = data.nombre
        des.value = data.descripcion
        cod.value = data.codigo
        sto.value = data.stock
        pre.value = data.precio
        lab.value = data.laboratorio
        ing.value = data.ingreso
        fec.value = data.fechaVencimiento
        ima.value = data.ima
        
        console.log(data)
        if (data.ingreso) {
            ing.value = data.ingreso.split('T')[0];
        }
        if (data.fechaVencimiento) {
            fec.value = data.fechaVencimiento.split('T')[0];
        }
    }
    request.onerror = function(){
        console.log("Error al cargar datos")
    }
}

function modificarProductos(id){
    let nom = document.getElementById('nombre-n').value
    let des = document.getElementById('descripcion-d').value
    let cod = document.getElementById('codigo-c').value
    let sto = document.getElementById('stock-s').value
    let pre = document.getElementById('precio-p').value
    let lab = document.getElementById('laboratorio-l').value
    let ing = document.getElementById('ingreso-i').value
    let fec = document.getElementById('fechaVencimiento-f').value
    let data = {'nombre':nom, 'descripcion':des, 'codigo':cod, 'stock':sto, 'precio':pre, 'laboratorio':lab, 'ingreso':ing, 'fechaVencimiento':fec, 'ima':ima}
    let request = sendRequest('productos/', 'POST', data);
    request.onload = function(){
        window.location='productos.html'
    }
    request.onerror = function(){
        console.log("Error al guardar los datos")
    }
}
