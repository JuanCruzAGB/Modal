
# Modal
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

Modal makes an excellent modal, it was created for my personal work (but you can use it **:D**).

-  [Installation](#installation)
-  [HTML](#html-step-by-step)
-  [Configuration](#configuration)
- 
## Installation
1. Clone the repository on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/Modal.git
```

2. And clone the repositories required too on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git
```

 3. Import the **CSS** in the `<head>`.
```
<link href="submodules/Modal/css/styles.css" rel="stylesheet">
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
Automatically the JS search all the HTMLElements with `class="modal-button"` & the same **Modal** id as a className giving to them the open/close action on click event.
For example:
```
<button class="modal-button modal-1">
	<span>Open Modal</span>
</button>
```

## Configuration
Import the **Modal** into your script to generate the logic.
```
import { Modal as Modal } from 'submodules/Modal/js/Modal.js';
```
And make a new **Modal**
```
let modal = new Modal({props}, {states})
```

The **properties** are:
- {string} **id:** Modal HTMLElement id. Default = `modal-1`

The **states** are:
- {boolean} **detectHash:** If the Modal have to detect the hash param set `true`. Default = `false`
- {boolean} **open:** If the Modal have to be opened set `true`. Default = `false`
- {boolean} **outsideClick:** If the Modal have to be closed when clicks outside set `true`. Default = `false`