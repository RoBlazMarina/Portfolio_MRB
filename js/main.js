// ============================================================
// JavaScript del portfolio
// ============================================================


// Validación de formularios de Bootstrap (ya lo hicimos en el Ejercicio 7)
document.querySelectorAll('.needs-validation').forEach(form => {
  form.addEventListener('submit', async event => {

    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const mensajeExito = document.getElementById('mensajeExito');
    const mensajeError = document.getElementById('mensajeError');
    mensajeExito.classList.add('d-none');
    mensajeError.classList.add('d-none');

    try {
      const respuesta = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (respuesta.ok) {
        mensajeExito.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
      } else {
        mensajeError.classList.remove('d-none');
      }
    } catch (error) {
      // Fallo de red
      mensajeError.classList.remove('d-none');
    }
  });
});
