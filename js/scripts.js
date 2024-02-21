function cargarMostrarDatos(nombreCategoria) {
    fetch('json/' + nombreCategoria + '.json')
        .then(response => response.json())
        .then(datos => {
            const contenedor = document.getElementById(nombreCategoria);
            let tabla = '<table>';
            // Añade aquí los encabezados de tu tabla
            tabla += '<tr><th>Nombre del Equipo</th><th>Puntos</th>...</tr>';
            datos.forEach(item => {
                tabla += `<tr>
                            <td>${item.Nombre_equipo}</td>
                            <td>${item.Puntos}</td>
                            ...
                          </tr>`;
            });
            tabla += '</table>';
            contenedor.innerHTML = tabla;
        });
}

// Cargar y mostrar los datos para cada categoría
cargarMostrarDatos('benjamines');
cargarMostrarDatos('prebenjamines');
cargarMostrarDatos('alevines');
