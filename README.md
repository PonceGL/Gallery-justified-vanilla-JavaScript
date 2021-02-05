# Gallery Justified Vanilla JavaScript

Esta es una galeria que ajusta las imagenes sin importar su relación de aspecto, para que se justifique respecto a los bordes. Sin frameworks, sin librerias.

### Implementación

Sus imagenes deben estar en el Array de nombre **_Images_**
Ya sea que los añada manualmente por medio de enlaces, o con un Images.push() de tus precargas.

En su <abbr title="Hyper Text Markup Language">HTML</abbr> solo nececita un div con el id y class Gallery

```html
<div class="Gallery" id="Gallery"></div>
```

Este es el bloque de codigo que se genera por cada imagen, puedes cambiar las cases si te parece mejor.

```javascript
<div class="Gallery_item">
        <img class="Gallery_item_image" src=${image} alt="image${i}" />
        <a class="Gallery_item_info" href="#">
            <h4 class="Gallery_item_info_name">Image ${i} </h4>
            <p class="Gallery_item_info_description">Gallery VanilaJS</p>
        </a>
      </div>
```

######No olvides importar el escrip y el archivo css

```html
<link rel="stylesheet" href="Justified_Gallery.css" />
<script src="Justified_Gallery.js"></script>
```

Genial!! Puedes agregar un numero indeterminado de imagenes, un consejo, intercala entre imagnes en formato vertical y formato horizontal, exito!!!

[@poncegl :fa-twitter-square:](https://twitter.com/poncegl)
