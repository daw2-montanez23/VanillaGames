export default {
    template: // html
    `
    <div class="container text-center">
    <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
      REGISTRARSE
    </h1>
    <div id=formularioRegistro>
        <form>
        <div class="usuarioRegistro">
            <label for="usuario"> Usuario 
            <br>
            <input type="text" name="usuario" id="usuario"/>
        </div>
        <div class="passwordRegistro">
            <label for="password"> Contraseña 
            <br>
            <input type="password" name="password" id="password" minlength="8" required />
        </div>
        <div class="botonEnviarRegistro">
            <input type="submit" value="Registrar" />
        </div>
        </form>
    </div>
    <div class="m-5 mx-auto" style="max-width: 200px">
      <img src="images/logo.svg" alt="fpllefia" class="img-fluid" />
    </div>
  </div>
  `,
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
        event.preventDefault()
        event.stopPropagation()
    // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      }
    })
  }
}