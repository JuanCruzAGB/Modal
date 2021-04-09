
# ModalJS
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

ModalJS hace una excelente modal, fue creado para mi uso laboral (pero puedes usarla sin problema **:D**).

 - [Instalación](#instalación)
 - [HTML](#html-paso-a-paso)
 - [Configuración](#configuración)
- 
## Instalación
1. Clone el repositorio en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/ModalJS.git
```

2. Y clone también los repositorios requeridos en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git
```

 3. Importe el **CSS** en la etiqueta `<head>`.
```
<link href="submodules/ModalJS/css/styles.css" rel="stylesheet">
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
If you want to position this content you can do it adding `center` `left` `top` `right` `bottom` as className.
For example:
Si querés posicionar el contenido puedes hacerlo agregandole las clases`center` `left` `top` `right` `bottom`.
Por ejemplo:
```
<div id="modal-1" class="modal">
	<div class="modal-content top center">
		<!-- -->
	</div>
</div>
```

## Configuración
Import the **Modal** into your script to generate the logic.
Importe el **Modal** en tu javascript para generar la logica.
```
import { Modal as ModalJS } from 'submodules/ModalJS/js/Modal.js';
```
Y cree un nuevo **ModalJS**
```
let modal = new ModalJS({props}, {states})
```

Las **propiedades** existentes son:
 - {string} **id:** Id de la etiqueta HTML de la Modal. Por defecto viene en `modal-1`

Los **estados** existentes son:
 - {boolean} **open:** Si quisieras que la Modal esté abierta pone como valor `true`. Por defecto viene en `false`