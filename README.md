# Guía para Alepht

**Versión de Ghost** 0.8.0
<br />
**Versión de alepht** 0.0.9


> Esta guía esta hecha especialmente para **Mario**, **Sergio**, **Juan** o cualquier persona externa de habla hispana.

## Índice

* [Artículos](#articulos)
* [Imágenes](#imagenes)
* [Tags](#tags)
* [Iconos](#iconos)

<h2 id="articulos">Artículos</h2>
Guía para la publicación adecuada de artículos.

### Keywords (Palabras clave)

El porcentaje de keywords de un texto tiene que ser del 2 o 3 %, demasiada densidad de keywords en el texto es penalizado, así que no podemos pretender que en un párrafo este la misma palabra repitiéndose varias veces.

Para poner dos o tres palabras clave debemos escribir 100 palabras de contenido extra.

**Ejemplo**:

Si la palabra clave de tu artículo es: **"Ghost"**, no podemos hacer un uso excesivo de esta en nuestro contenido.

**Incorrecto:**
> Lo mejor de **Ghost** es que **Ghost** está muy centrado en el SEO y marca personal de una persona o marca, por eso **Ghost** es muy bueno, yo recomiendo mucho **Ghost**.

**Correcto:**
> Lo mejor de **Ghost** es que es una plataforma que esta centrada en el SEO y marca personal de una persona o marca, es por ello por lo que es muy bueno, yo lo recomiendo mucho.

Nuestras palabras clave vendrían siendo la etiqueta `<strong>` que se aplica cuando usamos `**` en Ghost.

Pero no siempre es así, esta etiqueta `<strong>` puede usarse también para resaltar algo importante para el lector, como una frase o alguna definición, pero sin abusar de su uso.

### Uso de `h2` `h3`

El uso del `h2` y `h3` es muy importante dentro de un artículo, esto va a ayudar para el SEO del blog y mayor entendimiento del lector.

En conclusión, todos los artículos publicados deben de tener al menos un `h2` y un `h3`.

### Videos Responsive

Para poner un video en un artículo este debe de estar de la siguiente forma:

```
<div class="video">
    Tag: (iframe, object, embed, video)
</div>
```

> Esto es para que el video sea Responsive.

### Botones

Para poner botones en el artículo estos deben de estar de la siguiente forma:

```
<div class='custom-buttons'>
    <a href='#' target='_blank' class='button'>Soporte</a>
    <a href='#' target='_blank' class='button'>Demo</a>
    <a href='#' target='_blank' class='button'>Github</a>
</div>
```

> La idea es usarlos para demos, repositorios, dar soporte, pero se pueden usar libremente.

---

<h2 id="imagenes">Imágenes</h2>
Guía para el uso adecuado de imágenes.

### Imágenes de portada

Para poner una imagen de portada es muy importante que tenga una resolución de **1280 × 853** y no pese más de 150KB.

Se puede usar Photoshop para bajar la calidad o algún compresor de imágenes, yo recomiendo [Kraken](https://kraken.io/web-interface).

### Imágenes dentro de un artículo

Las imágenes dentro de un artículo son muy importantes para el contenido y el lector pueda entender mejor algún ejemplo o explicación

Esta puede ser del **alto** que sea, pero el **ancho** no debe ser mayor de **800px** y peso de no debe ser mayor a 150KB.

Se puede usar Photoshop para bajar la calidad o algún compresor de imágenes.

 JPG -> [Kraken](https://kraken.io/)
 PNG -> [Tinypng](https://tinypng.com/)

## Imagen del autor

La imagen del autor debe de ser de **150 x 150** y que no pese más de 15KB.

---

<h2 id="tags">Tags</h2>
Guía para el uso adecuado de los tags.

Para definir los tags de nuestro artículo hay que empezar por el tema principal (Go, JavaScript, Redis, etc.) y posteriormente la categoría a la que pertenece (Frontend, Backend, DevOps, Base de datos)

> Importante: Los tags deben de estar en minúsculas 

Esto simplemente es para tener un control y orden de todos los artículos y los iconos (SVG) no se agrupen.

---

<h2 id="iconos">Iconos</h2>
Guía para el uso adecuado de los iconos.

Para que un icono (SVG) sea visible es muy importante que el tag se llame de la siguiente manera:

Nombre del tag | Icono 
------------ | -------------
android | android
angular | angular
arduino | arduino
aws | amazon web services
babel | babel
backbone | backbone
bash | bash
bootstrap | bootstrap
bower | bower
browserify | browserify
c | lenguaje C
cplusplus | C++
capistrano | capistrano
cassandra | cassandra
centos | centOS
codeigniter | codeigniter
cordova | cordova
couchdb | couchdb
css | CSS3
dart | dart
debian | debian
django | django
docker | docker
eclipse | eclipse
electron | electron
ember | ember
emmet | emmet
erlang | erlang
es6 | ECMAscript 6
express | express
firebase | firebase
flux | flux
foundation | foundation
ghost-post | ghost
git | git
github | github
gitlab | gitlab
gnu | GNU
google-analytics | google analytics
google-cloud | google cloud
google | google
go | go
grunt | grunt
gulp | gulp
hack | hack
handlebars | handlebars
haskell | haskell
heroku | heroku
html | HTML5
immutable | immutableJS
invision | invision
io | io.js
ionic | ionic
java | java
javascript | javascript
magento | magento
mailchimp | mailchimp
mailgun | mailgun
mandrill | mandrill
mariadb | mariadb
markdown | markdown
marvel | marvel
medium | medium
meteor | meteor
windows | windows
modernizr | modernizr
momentjs | momentJS
mongodb | mongoDB
mysql | mysql
neo4j | neo4j
nginx | nginx
nodejs | nodejs
npm | npm
opensource | opensource
oracle | oracle
paypal | paypal
phoenix | phoenix
polymer | polymer
postcss | postCSS
postgresql | postgresql
pug | pug (Jade)
rackspace | rackspace
raspberry-pi | raspberry Pi
react | reactJS
reapp | reapp
redhat | redhat
redis | redis
redux | redux
require | requireJS
rethinkdb | rethinkDB
sails | sailsJS
sass | sass
sketch | sketch
socketio | socket.IO
stylus | stylus
suse | openSUSE
symfony | symfony
terminal | terminal
travis | travis
ubuntu | ubuntu
unity | unity
vim | vim
visual-studio | visual studio
w3c | w3c
webcomponents | webcomponents
wordpress | wordpress
xamarin | xamarin
yeoman | yeoman

---


