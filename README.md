# Basic eCommerce

The core of this project is [Vanilla JS][VanillaJS], in other words, this is a raw [JavaScript][JavaScript] project for learning the basis of **web development**.
This project includes another common technologies like [HTML][HTML], [CSS][CSS], [Pug][Pug], [Sass][Sass], [Babel][Babel] and [gulp][gulp].

Below, we will see general notes about the development process for this project.

## Research and design

This project has two parts. The first one is a basic gallery of products for any user. The second one is a basic management system for the first part, with a private access, just for authorized users.

Below, we have a first prototype made in [Photoshop][Photoshop] and [InVision][InVision] apps for the first part. Then, in a better tool, we have a second prototype in [Figma][Figma] for the first and second part. Finally, the design file for this project, which just contents the design in wireframe level.

- [Gallery prototype - First version](https://invis.io/RDSCSNI6ZKT#/366546754_Wireframe_-_Home)
<!-- TODO: -->
- [Gallery prototype - Second version](https://www.figma.com/proto/Dg6YZgWEIcNVdHx68L2LFX/Basic-eCommerce?page-id=232%3A245&node-id=601%3A294&viewport=273%2C48%2C0.11&scaling=scale-down&starting-point-node-id=601%3A294)
- [Management system prototype]()
- [Design file](https://www.figma.com/file/Dg6YZgWEIcNVdHx68L2LFX/Basic-eCommerce?node-id=232%3A245)

## Installations

Make sure that [Node][Node], [npm][npm] and [Git][Git] are installed:

```bash
node --version
npm  --version
git  --version
```

Global installation of [gulp], [Pug] and [Sass]:

```bash
npm install -g gulp-cli
npm install -g pug
npm install -g sass
```

Make sure that [gulp][gulp], [Pug][Pug] and [Sass][Sass] are installed:

```bash
gulp --version
pug  --version
sass --version
```

Starting [npm][npm]:

```bash
npm init -y
```

Local installation of [gulp] and [Sass]:

```bash
npm install --save-dev gulp
npm install --save-dev sass
```

Local installation of [Babel]:

```bash
npm install --save-dev @babel/core
npm install --save-dev @babel/register
npm install --save-dev @babel/preset-env
```

Installation of [gulp] plugins:

```bash
npm install --save-dev gulp-babel
npm install --save-dev gulp-terser
npm install --save-dev gulp-concat

npm install --save-dev gulp-pug
npm install --save-dev gulp-sass

npm install --save-dev gulp-cache-bust
npm install --save-dev browser-sync
npm install --save-dev gulp-plumber

# npm install --save-dev eslint
# npm install --save-dev gulp-eslint

# npx eslint --init
# .eslintrc.json
```

## File structure

For **empty folders** to be considered by **git**:

```
folder/
|
|— .gitkeep
```

Folders and files **organization**:

```
basic-ecommerce/
|
|— build/                   // Production folder
|— layout/                  // First approach with raw HTML, CSS and JS
|— node_modules/            // Created by npm
|— src/                     // Development folder
|
|— .babelrc                 // For ES6 syntax
|— .editorconfig            // Coding styles
|— .gitignore               // Ignored files by git
|— gulpfile.babel.js        // Definition of gulp tasks
|— package-lock.json        // Created by npm
|— package.json             // Created by npm
|— README.md                // Information about the project
```

<!--
|— .browserslistrc          // Automatizar los respaldos de JS
|— .eslintrc.json           // Configuración de la sintaxis JS
|— .htaccess                // Redirección a la aplicación (Sólo local)
|— composer.json            // Creado con composer
|— composer.lock            // Creado con composer
|— composer.phar            // Creado con composer
-->

**src** folder organization:

```
src/
|
|— sass/
|  |
|  |— base/
|  |— components/
|  |— config/
|  |— layout/
|  |— mixins/
|
|— scripts/
|
|— views/
   |
   |— components/           // Mixins
   |— config/               // Variables and global constants
   |— includes/             // Finished content for all the pages
   |— pages/                // Finished pages for compilation
   |— sections/             // Finished content for some pages
   |— templates/            // General structure of pages
```

<!--
|— database/                // Bases de datos
|
|— dist/                    // Lo que se subirá al servidor
|   |
|   |— app/                 // Lo que correrá en el servidor
|   |   |
|   |   |— config/          // Constantes globales del proyecto
|   |   |— controllers/     // Controladores
|   |   |— helpers/         // Utilitarios
|   |   |— libraries/       // Clases base del proyecto
|   |   |— models/          // Modelos
|   |   |— vendor/          // Librerías de terceros
|   |   |— views/           // Vistas
|   |
|   |— public/              // Lo que correrá en el cliente
|       |
|       |— assets/          // Imágenes, íconos, etc.
|       |— css/
|       |— data/
|       |— js/
|
|— vendor/
-->

<!-------------------------------------------------------------------------
 !  Links
-------------------------------------------------------------------------->

[VanillaJS]:    http://vanilla-js.com/

[Photoshop]:    https://www.adobe.com/la/products/photoshop.html
[InVision]:     https://www.invisionapp.com/
[Figma]:        https://www.figma.com/

[HTML]:         https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]:          https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript]:   https://developer.mozilla.org/en-US/docs/Web/JavaScript

[Node]:         https://nodejs.org/es/
[npm]:          https://www.npmjs.com/
[Git]:          https://git-scm.com/

[Pug]:          https://pugjs.org/api/getting-started.html
[Sass]:         https://sass-lang.com/
[gulp]:         https://gulpjs.com/

[Babel]:        https://babeljs.io/
