
# Modal
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

Modal hace una excelente modal, fue creado para mi uso laboral (pero puedes usarla sin problema **:D**).

 - [Instalación](#instalación)
 - [HTML](#html-paso-a-paso)
 - [Configuración](#configuración)
- 
## Instalación
1. Clone el repositorio en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/Modal.git
```

2. Y clone también los repositorios requeridos en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git
```

 3. Importe el **CSS** en la etiqueta `<head>`.
```
<link href="submodules/Modal/css/styles.css" rel="stylesheet">
```

## HTML paso a paso
Para empezar, genere una etiqueta **HTML** con un `id` y una `class="modal"`.
Por ejemplo:
```
<div id="modal-1" class="modal">
	<!-- -->
</div>
```
Dentro, tienes que agregar el `modal-content`. Es una etiqueta **HTML** con `class="modal-content"`.
Por ejemplo:
```
<div id="modal-1" class="modal">
	<div class="modal-content">
		<!-- -->
	</div>
</div>
```
Si querés posicionar el contenido puedes hacerlo agregandole las clases`center` `left` `top` `right` `bottom`.
Por ejemplo:
```
<div id="modal-1" class="modal">
	<div class="modal-content top center">
		<!-- -->
	</div>
</div>
```
Automaticamente el archivo busca todos los elementos **HTML** que existan con la clase = `modal-button` y además una clase igual al `id` de la **Modal**, y los hace abrir/cerrar al clickearlos, dependiendo de como esté.
Por ejemplo:
```
<button class="modal-button modal-1">
	<span>Open Modal</span>
</button>
```

## Configuración
Import the **Modal** into your script to generate the logic.
Importe el **Modal** en tu javascript para generar la logica.
```
import { Modal as Modal } from 'submodules/Modal/js/Modal.js';
```
Y cree un nuevo **Modal**
```
let modal = new Modal({props}, {states})
```

Las **propiedades** existentes son:
 - {string} **id:** Id de la etiqueta HTML de la Modal. Por defecto viene en `modal-1`

Los **estados** existentes son:
 - {boolean} **detectHash:** Si quisieras que la Modal detecte cuando esta tageada con el hash pone como valor `true`. Por defecto viene en `false`
 - {boolean} **open:** Si quisieras que la Modal esté abierta pone como valor `true`. Por defecto viene en `false`
 - {boolean} **outsideClick:** Si quisieras que la Modal se cierre al clickear en el fondo pone como valor `true`. Por defecto viene en `false`