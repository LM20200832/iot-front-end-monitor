let respuesta = document.getElementById("respuesta");

function callApiRequest() {
  axios
    .get(
      "https://18.116.48.28/iot-car-control/back-end/apis/getRegistro.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);
      let respuestaServidor = 
      response.data=='f'?"ADELANTE":

      response.data=='b'?"ATRAS":

      response.data=='l'?"IZQUIERDA":

      response.data=='r'?"DERECHA":

      "DETENER";

      respuesta.innerHTML="Última orden: <strong>" + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

  setInterval(callApiRequest, 100); // 1000 milisegundos = 1 segundo
