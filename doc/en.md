
# ModalJS
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

ModalJS makes an excellent modal, it was created for my personal work (but you can use it **:D**).

-  [Installation](#installation)
-  [HTML](#html-step-by-step)
-  [Configuration](#configuration)
- 
## Installation
1. Clone the repository on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/ModalJS.git
```

2. And clone the repositories required too on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git
```

 3. Import the **CSS** in the `<head>`.
```
<link href="submodules/ModalJS/css/styles.css" rel="stylesheet">
```

## HTML step by step
To start, make an HTMLElement with an `id` and a `className="modal"`.
For example:
```
<div id="modal-1" class="modal">
	<!-- -->
</div>
```
Inside, you have to create the `modal-content`. This is an HTMLElement with `className="modal-content"`.
For example:
```
<div id="modal-1" class="modal">
	<div class="modal-content">
		<!-- -->
	</div>
</div>
```
If you want to position this content you can do it adding `center` `left` `top` `right` `bottom` as className.
For example:
```
<div id="modal-1" class="modal">
	<div class="modal-content top center">
		<!-- -->
	</div>
</div>
```

## Configuration
Import the **Modal** into your script to generate the logic.
```
import { Modal as ModalJS } from 'submodules/ModalJS/js/Modal.js';
```
And make a new **ModalJS**
```
let modal = new ModalJS({props}, {states})
```

The **properties** are:
- {string} **id:** Modal HTMLElement id. Default = `modal-1`

The **states** are:
- {boolean} **open:** If the Modal have to be opened. Default = `false`