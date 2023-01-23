
# Vanilla Justified Gallery

This is a gallery that adjusts images no matter their aspect ratio, so they are justified with respect to the borders. No frameworks, no external libraries.

## Screenshots
<!-- ![Vanilla Justified Gallery Screenshots](/public/Vanilla_Justified_Gallery_Screenshots.png) -->
![Vanilla Justified Gallery Demo](/public/Vanilla_Justified_Gallery_Demo.gif)

Built with TypeScript.
## Installation

Install my-project with npm

```bash
  npm install vanilla-justified-gallery

  or 

  yarn add vanilla-justified-gallery
```
    
## Usage/Examples

Create a **div** tag with the **id "justified_gallery"**.

```html
// index.html
<body>
    <header>
      <h1>My app with Justified Gallery</h1>
    </header>
    <div id="justified_gallery"></div>
    <script type="module" src="/main.js"></script>
</body>
```

Or injects with JavaScript
```html
// index.html
<body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
</body>
```
```javascript
//main.js
import './style.css'
(function(){
  document.querySelector('#app').innerHTML = `
    <header>
      <h1>My app with Vite</h1>
    </header>
    <section class="gallery-coontainer">
      <div id="justified_gallery"></div>
    </section>
  `
}())
```

Import the `gallery` function and your images

```javascript
//main.js
import './style.css'
import {gallery} from "vanilla-justified-gallery"
import images from "./data/images.json"

(function(){
  document.querySelector('#app').innerHTML = `
    <header>
      <h1>My app with Vite</h1>
    </header>
    <section class="gallery-coontainer">
      <div id="justified_gallery"></div>
    </section>
  `
  gallery({images})
}())
```

Your image array should look as follows

```
// array of ImageOpject

ImageOpject {
  url: string;
  title?: string;
  description?: string;
  altText?: string;
}
```
Example:

```json
[
    {
      "id": "photo_1",
      "url": "https://images.unsplash.com/photo-1593318917163-76fa09974ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "title": "Photo 1",
      "altText": "Photo 1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      "id": "photo_2",
      "url": "https://images.unsplash.com/photo-1603251581451-c87f8ee7febc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1881&q=80",
      "title": "Photo 2",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]
```

## The `gallery` function accepts the following values

| param          | value | default | requiredrequired | Description                                                         |
| ------------ | --- | ------- | --- | ------------------------------------------------------------------- |
| images | ImageOpject | undefined | true | array of ImageOpject |
| showTitle | boolean | false | false | boolean value indicating whether to display the title of the image when hover |
| centerTitle | boolean | false | false | boolean value indicating if the title should be centered |
| showDescription | boolean | false | false | boolean value indicating whether to display the desciption text on hover |
| centerDescription | boolean | false | false | boolean value indicating if the description should be centered |
| separation | number | 1 | false | numerical value, will be the number of pixels separating the images. |

## Features
 - Right arrow key
 - Left arrow key
 - Esc key
 - Lighbox
 - Infinite loop

Puedes encontrar la muestra del proyecto aqui [Justified Gallery](https://poncegl.github.io/Gallery-justified-vanilla-JavaScript/)

Great! You can add any number of images 🌠🎆🎇🎑🩻.

A tip, intersperse between portrait and landscape images, success!!!!!

[@poncegl](https://twitter.com/poncegl)
