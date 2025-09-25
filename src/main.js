import './style.css'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/JohnFreddyTutistar" target="_blank">
      <img src="https://www.pngarts.com/files/3/Naruto-Shippuden-PNG-Download-Image.png" class="logo" alt="Vite logo" />
    </a>
    
    <h1>John Freddy Tutistar!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button>Nuevo boton</button>
    </div>
    <h3 class="read-the-docs">
      Bienvenido a mi página web
    </h3>
  </div>
`

setupCounter(document.querySelector('#counter'))
