// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'


import {header} from './componentes/header.js'
import {footer} from './componentes/footer.js'

// Importamos la vista por defecto (que será home)
async function cargarVista(){
  const componente = await import('./vistas/registroVista.js')
  const vista = componente.default
   // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  //Ejecutamos la logica de la vista
  vista.script()
}

cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template