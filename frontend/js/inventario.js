function mostrarProductos(){
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('inventario-table');
    table.innerHTML = "";
    request.onload = function () {
    let data = request.response;
    //console.log(data);  //saber si esta trayendo los datos de la base de datos
    data.forEach(element => {
        table.innerHTML += `
        <tr class="table-dark">
            <td>${element.nombre}</td>
            <td>${element.descripcion}</td>
            
            <td>${element.stock}</td>
            <td>${element.precio}</td>
            <td>${element.laboratorio}</td>
            
            <td>
                <button type="button" class="btn btn-primary w-auto" onclick="window.location =''">Añadir al carrito</button>
                
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




