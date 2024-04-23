document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var tipoIdentificacion, numeroIdentificacion;
        // Obtener los valores de los campos del formulario
         tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
        var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
        var nombreCompleto = document.getElementById("nombreCompleto").value;
        var apellidoPaterno = document.getElementById("apellidoPaterno").value;
        var apellidoMaterno = document.getElementById("apellidoMaterno").value;
        var genero = document.getElementById("genero").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var lugarNacimiento = document.getElementById("lugarNacimiento").value;
        var nacionalidad = document.getElementById("nacionalidad").value;
        var estadoCivil = document.getElementById("estadoCivil").value;
        var numeroTelefonico = document.getElementById("numeroTelefonico").value;
        var correoElectronico = document.getElementById("correoElectronico").value;
        var domicilio = document.getElementById("domicilio").value;
        var provincia = document.getElementById("provincia").value;

        // Crear un objeto JSON con los datos del formulario
        var datosFormulario = {
            tipoIdentificacion: tipoIdentificacion,
            numeroIdentificacion: numeroIdentificacion,
            nombreCompleto: nombreCompleto,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            genero: genero,
            fechaNacimiento: fechaNacimiento,
            lugarNacimiento: lugarNacimiento,
            nacionalidad: nacionalidad,
            estadoCivil: estadoCivil,
            numeroTelefonico: numeroTelefonico,
            correoElectronico: correoElectronico,
            domicilio: domicilio,
            provincia: provincia
        };

        // Convertir el objeto JSON a cadena para almacenarlo o enviarlo
        var datosFormularioString = JSON.stringify(datosFormulario);
        console.log(datosFormularioString);

        // Enviar datos al servidor
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {
                    alert("Solicitud de empleo enviada correctamente.");
                } else {
                    alert("Error al enviar la solicitud de empleo. Por favor, inténtalo de nuevo.");
                }
            }
        };
        xhr.open("POST", "http://localhost:3000/solicitudes", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(datosFormularioString);
    });
});

