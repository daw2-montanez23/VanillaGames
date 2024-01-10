// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'


// Importamos componentes header y footer
import { header } from './componentes/header.js'
import { footer } from './componentes/footer.js'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'