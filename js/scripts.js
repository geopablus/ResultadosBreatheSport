function cargarMostrarDatos(nombreCategoria) {
    fetch('json/' + nombreCategoria + '.json')
        .then(response => response.json())
        .then(datos => {
            const contenedor = document.getElementById(nombreCategoria);
            let tabla = '<table>';
            // Añade aquí los encabezados de tu tabla
            tabla += '<tr><th>Nombre del equipo</th><th>Puntos</th><th>Partidos jugados</th><th>Partidos ganados</th><th>Partidos empatados</th><th>Partidos perdidos</th><th>Goles a favor</th><th>Goles en contra</th></tr>';
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