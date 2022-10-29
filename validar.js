document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('Tiene que escribir el mail como medio de contacto');
      return;
    }

    this.submit();
}

//la validación es en contacto.html